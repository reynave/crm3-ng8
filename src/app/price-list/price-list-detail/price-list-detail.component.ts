import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { PriceListUpdate } from './../price-list';


@Component({
  selector: 'app-price-list-detail',
  templateUrl: './price-list-detail.component.html',
  styleUrls: ['./price-list-detail.component.css']
})
export class PriceListDetailComponent implements OnInit {
  public label: any;
  public items: any = [];
  public loading = true;
  public id: string;
  public closeResult: string;
  isReadOnly:boolean=true;
  accessRules : any = [];
  product_location:any=[];
  product_type:any=[];
  priceListUpdate:any = [];
  attachment :any=[];
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

  
  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'pricelist/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.product_location = data['result']['product_location'];
      this.product_type = data['result']['product_type'];

      this.attachment = data['result']['attachment'];


      this.priceListUpdate = new PriceListUpdate(
        data['result']['data']['name'],
        data['result']['data']['sku'],
        data['result']['data']['id_product_type'],
        data['result']['data']['price'],
        data['result']['data']['description'] 
      ); 
       console.log(data);
      this.loading = false;
    });
  }

  selectedFile=null;
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append('files',this.selectedFile, this.selectedFile.name);
    fd.append('token', this.configService.token() );
    fd.append('id_module', this.id );
    
    console.log(fd, this.configService.token() );
    this.http.post(this.configService.base_url() + 'upload/priceList_attachment',fd,{
  //    reportProgress: true,
    //  observe: 'events'
    })
    .subscribe(
    /*  event => {
        if(event.type === HttpEventType.UploadProgress){
          console.log(event ); // handle event here
        }else if( event.type === HttpEventType.Response ){
          console.log(event ); // handle event here
        }
       
      },*/
      data => {
       // console.log(data); 
        this.attachment = data['result']['attachment'];
        this.httpGet(); 
      }
      
    );
  }
  fn_attach_delete(x){
    this.loading = true;
   
    this.http.post(this.configService.base_url() + 'pricelist/fn_attach_delete',
      {
        "id": x.id, 
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
        this.attachment.splice(objIndex, 1); 
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }



  fn_update(){
    this.loading = true;
    this.http.post(this.configService.base_url() + 'pricelist/update',
      {
        "id": this.id,
        "data": this.priceListUpdate
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {  
        this.httpGet();
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  fn_delete() {
    if (confirm('Delete this Product ?')) {
      
      this.http.post(this.configService.base_url() + 'pricelist/fn_deleteSolo',
        {
          "id": this.id
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
           console.log(data);
          this.router.navigate(['/priceList/']);

        },
        error => {
           console.log(error);
           console.log(error.error.text);
        }
      );

    }
  }

  fn_updateLocation(x){
    console.log(x);
    this.http.post(this.configService.base_url() + 'pricelist/fn_updateLocation',
      {
        "id": x.id, 
        "location" : x.location,
        "qty" : x.qty,
        "location_code" : x.location_code,
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

  fn_addProduct_location(){

    this.loading = true; 
    this.http.post(this.configService.base_url() + 'pricelist/fn_addProduct_location',
      {
        "id": this.id, 
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        console.log(data);   
        this.loading = false;
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

   
    this.http.post(this.configService.base_url() + 'pricelist/fn_deleteProduct_location',
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
