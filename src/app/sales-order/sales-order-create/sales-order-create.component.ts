import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from './../../service/config.service';
import { SalesOrderNew } from './../sales-order';

@Component({
  selector: 'app-sales-order-create',
  templateUrl: './sales-order-create.component.html',
  styleUrls: ['./sales-order-create.component.css']
})
export class SalesOrderCreateComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<string>();

  model: any = [];
  loading: boolean = true;
  id: string;
  module: string;
  contact:any=[];
  user:any=[];
  company:any=[];
  opportunity:any=[];
  quotes:any=[];
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.module = "opportunity";
    this.id = "102"
    this.httpGet();
  }

  
  httpGet() {
    this.loading = true;
   // var url = this.configService.base_url() + 'create/opportunity/' + this.id;
    var url = this.configService.base_url() + 'sales_order/create/'+this.module+'/'+this.id;
    
    this.http.get(url, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.contact = data['result']['contact'];
      this.quotes = data['result']['quotes'];
      this.user = data['result']['user'];
      this.company = data['result']['company'];
      this.opportunity = data['result']['opportunity'];
      this.model = new SalesOrderNew( 
        data['result']['data']['id_quote'],
        data['result']['data']['id_opportunity'],
        data['result']['data']['id_company'],
        data['result']['data']['id_contact'],
        '', 
        '', 
        '', 
        '', 
        data['result']['data']['discount'], 
        data['result']['data']['tax'], 
        data['result']['data']['shipping'], 
        data['result']['data']['id_user'], 
        data['result']['data']['email'], 
        data['result']['data']['email'], 
        data['result']['data']['fax'], 
        data['result']['data']['bill']['bill_name'], 
        data['result']['data']['bill']['bill_street1'], 
        data['result']['data']['bill']['bill_street2'],
        data['result']['data']['bill']['bill_city'],
        data['result']['data']['bill']['bill_state'], 
        data['result']['data']['bill']['bill_code'], 
        data['result']['data']['bill']['bill_country'], 

        data['result']['data']['bill']['ship_name'],
        data['result']['data']['bill']['ship_street1'],
        data['result']['data']['bill']['ship_street2'],
        data['result']['data']['bill']['ship_city'], 
        data['result']['data']['bill']['ship_state'], 
        data['result']['data']['bill']['ship_code'],
        data['result']['data']['bill']['ship_country']); 
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  fn_submit(){
    this.loading = true;
    this.http.post(this.configService.base_url() + 'sales_order/fn_insertSalesOrder',
      {
        "data": this.model,
        "module" : this.module
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
          this.loading = false;
        //  this.router.navigate(['/quote/', data['result']['id']]);
        //  this.model.dismissAll();
         

      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  close(){
    this.uploaded.emit();
  }
}
