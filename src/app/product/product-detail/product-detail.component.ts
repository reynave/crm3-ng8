import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { InsertProduct  } from './../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public label: any;
  public items: any = [];
  public loading = true;
  public id: number;
  isReadOnly:boolean = true;
  accessRules : any = []; 
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.accessRules = this.configService.access_right();
    console.log('accessRules',this.accessRules);
    this.httpGet(); 
  }
  product_type:any=[];
  product_location:any=[];
  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'product/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.product_location = data['result']['product_location'];
      this.product_type = data['result']['product_type']; 
      this.items = new InsertProduct( 
        data['result']['data']['name'],
        data['result']['data']['sku'],
        data['result']['data']['id_product_type'],
        data['result']['data']['qty']
        );

      this.loading = false;
    });
  }

  fn_update(){
    this.loading = true;
    this.http.post(this.configService.base_url() + 'product/update',
      {
        "id": this.id,
        "data": this.items
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        console.log(data);
        this.httpGet();
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  fn_updateLocation(x){
    console.log(x);
    this.http.post(this.configService.base_url() + 'product/fn_updateLocation',
      {
        "id": x.id, 
        "location" : x.location
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        console.log(data);    
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  fn_addProduct_location(x){

    this.loading = true; 
    this.http.post(this.configService.base_url() + 'product/fn_addProduct_location',
      {
        "id": this.id, 
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        console.log(data);  this.loading = false;
        this.product_location = data['result']['product_location'];
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  fn_deleteProduct_location(x){ 
    var objIndex = this.product_location.findIndex((obj => obj.id == x.id ));
    this.product_location.splice(objIndex, 1);

   
    this.http.post(this.configService.base_url() + 'product/fn_deleteProduct_location',
      {
        "id": x.id, 
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        console.log(data);    
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );
  }
}
