import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product, InsertProduct } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public label: any;
  public items: any;
  public itemsSelected: any = [];
  public loading: boolean = true;
  selected: any = [];
  public id: number;
  product_type: any = [];
  inserProduct = new InsertProduct('', '', '', '0');
  modalNote:string; 
  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get(this.configService.base_url() + 'product', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.product_type = data['result']['product_type'];
      console.log(data);
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }


  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  clearNote(){
    this.modalNote = "";
  }


  onSubmit() {
    
    this.http.post(this.configService.base_url() + 'product/insert',
      { 
        "data": this.inserProduct
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.modalNote = "Insert new product success";
          this.inserProduct = new InsertProduct('', '', '', '0');
          this.httpGet();
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }


  objIndex: any;
  fn_check(x) {
    this.objIndex = this.items.findIndex((obj => obj.id == x.id));
    if (this.items[this.objIndex]['check'] == true) {
      this.items[this.objIndex]['check'] = false;
    } else {
      this.items[this.objIndex]['check'] = true;
    }
    var object = {
      'id': x.id,
      'name': x.name,
      'sku': x.sku,
    }
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (objectSelect == -1) {
      this.itemsSelected.push(object);
    }else{
      this.itemsSelected.splice(objectSelect, 1);
    }
    // console.log(this.itemsSelected);
  }

  fn_removeItemSelected(x) {
    this.objIndex = this.items.findIndex((obj => obj.id == x.id));
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (this.items[this.objIndex]['check'] == false) {
      this.items[this.objIndex]['check'] = true;
    } else {
      this.items[this.objIndex]['check'] = false;
    }
    this.itemsSelected.splice(objectSelect, 1);
  }
  

  fn_delete() {
  
    this.http.post(this.configService.base_url() + 'product/fn_delete',
    {
      "data": this.itemsSelected
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        // console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
 
  }

}
