import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Newproductlist } from './../price-list';

@Component({
  selector: 'app-price-list-product',
  templateUrl: './price-list-product.component.html',
  styleUrls: ['./price-list-product.component.css']
})
export class PriceListProductComponent implements OnInit {
  public label: any;
  public items: any;
  public loading = true;
  public closeResult: string;
  editable: boolean = false;
  model: any;
  id: number;
  id_pricelist:number;
  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
  ) {

    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpGet();

  }
  pricelist: string;
  catalog: string;
  selectProduct: any = [];
  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'pricelist/productlist/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.configService.errorToken(data);
      this.id_pricelist = data['result']['id_pricelist'];
      this.model = new Newproductlist(this.id, 1, 1, '1', '', '');
      this.items = data['result']['data'];
      this.catalog = data['result']['catalog'];
      this.selectProduct = data['result']['selectProduct'];
      this.pricelist = data['result']['pricelist'];

      this.loading = false;
    });
  }
  hideDesc:boolean = true;
  addPricelist: any = {
    id_product: "",
    price: "",
    description: "",
  }
  note:string;
  insertProductPrice() {
    console.log(this.addPricelist);
    if(this.addPricelist['id_product'] && this.addPricelist['price'] ){ 
      this.http.post(this.configService.base_url() + 'pricelist/insertProductPrice/',
        {
          "id": this.id,
          "data": this.addPricelist
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.httpGet();
          this.note = "";
          this.hideDesc = true;
          this.addPricelist = { 
            price: "",
            description: "",
          }
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
    }else{
      this.note = "Please add product and price first !";
    }
  }

  fn_edit() {
    if (this.editable == false) {
      this.editable = true;
    } else {
      this.editable = false;
    }
  }

  fnDelete(x){
    var objIndex = this.items.findIndex((obj => obj.id == x.id ));
     this.items.splice(objIndex, 1);

     this.http.post(this.configService.base_url() + 'pricelist/deleteProductPrice/',
     {
       "id": x.id, 
     }, {
     headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data); 
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );

  }

  update(x){
    console.log(x);
    var objIndex = this.items.findIndex((obj => obj.id == x.id ));
    this.items[objIndex]['product'] = 'Saving...!';
    if(x.id ){ 
      this.http.post(this.configService.base_url() + 'pricelist/updateProductPrice/',
        {
          "id": x.id,
          "data": x
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data); 
         
          this.items[objIndex]['product'] = data['result']['update']['product'];
      
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
    }else{
      this.note = "Please add product and price first !";
    }
  }
}
