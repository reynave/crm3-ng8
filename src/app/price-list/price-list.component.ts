import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Newpricelist } from './price-list';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  public label: any;
  public items: any;
  public loading = true;
  public model:any;
  public closeResult: string;
  
  objIndex:any=[];
  public itemsSelected: any = [];
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
    this.model = new Newpricelist('',1,'','','');
    this.itemsSelected = [];
    this.httpGet(); 
  }


  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'pricelist/index/', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.configService.errorToken(data);  
      this.items = data['result']['data']; 
      this.loading = false;
    });
  }


  submit:boolean= false;
  
  onSubmit(value = "") {

    this.submit= true;
    this.http.post(this.configService.base_url() + 'pricelist/insert_pricelist',
      {
        "data": this.model
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
           console.log(value);
          this.submit= false;
          if (value == 'next') {
            this.model = new Newpricelist('',1,'','1','');
            this.httpGet(); 
          }
          else {
            this.router.navigate(['/priceList/',data['result']['id'] ]);
            this.modalService.dismissAll();
          }
        

        },
        error => {
          // console.log(error);
          // console.log(error.error.text);
        }
      );
  }
 
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  
  fn_check(x) {
    console.log(x);
    this.objIndex = this.items.findIndex((obj => obj.id == x.id));
    if (this.items[this.objIndex]['check'] == true) {
      this.items[this.objIndex]['check'] = false;
    } else {
      this.items[this.objIndex]['check'] = true;
    }
    var object = {
      'id': x.id,
      'name': x.name, 
    }
    console.log(object);
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
