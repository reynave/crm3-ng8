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
  module: string = this.activatedRoute.snapshot.url[0].path;
  contact: any = [];
  user: any = [];
  company: any = [];
  opportunity: any = [];
  quotes: any = [];
  related: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    if (this.module == 'deal') {
      this.related = true;
    }

    this.id = this.activatedRoute.snapshot.params.id ? this.activatedRoute.snapshot.params.id : "";
    this.httpGet();
  }


  httpGet() {
    this.loading = true;
    // var url = this.configService.base_url() + 'create/opportunity/' + this.id;
 
    var url = this.configService.base_url() + 'sales_order/create/' + this.module + '/' + this.id;
    console.log(url);
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
        data['result']['data']['phone'],
        data['result']['data']['fax'],
        data['result']['data']['bill']['bill_name'],
        data['result']['data']['bill']['bill_street1'],
        data['result']['data']['bill']['bill_street2'],
        data['result']['data']['bill']['bill_city'],
        data['result']['data']['bill']['bill_state'],
        data['result']['data']['bill']['bill_code'],
        data['result']['data']['bill']['bill_country'],

        data['result']['data']['ship']['ship_name'],
        data['result']['data']['ship']['ship_street1'],
        data['result']['data']['ship']['ship_street2'],
        data['result']['data']['ship']['ship_city'],
        data['result']['data']['ship']['ship_state'],
        data['result']['data']['ship']['ship_code'],
        data['result']['data']['ship']['ship_country']);
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }


  fn_updateContact() {
    console.log(this.model['id_company']);
    this.loading = true;
    var url = this.configService.base_url() + 'contact/index/' + this.model['id_company'];
    console.log(url);
    this.http.get(url, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.contact = data['result']['data'];

      var objIndex = this.company.findIndex((obj => obj.id == this.model['id_company']));
      console.log(this.company[objIndex]['bill_city']);


      this.model['email'] = this.company[objIndex]['email'];
      this.model['phone'] = this.company[objIndex]['phone'];
      this.model['fax'] = this.company[objIndex]['fax'];
      this.model['bill_name'] = this.company[objIndex]['bill_name'];
      this.model['bill_street1'] = this.company[objIndex]['bill_street1'];
      this.model['bill_street2'] = this.company[objIndex]['bill_street2'];
      this.model['bill_city'] = this.company[objIndex]['bill_city'];
      this.model['bill_state'] = this.company[objIndex]['bill_state'];
      this.model['bill_code'] = this.company[objIndex]['bill_code'];
      this.model['bill_country'] = this.company[objIndex]['bill_country'];

      this.model['ship_name'] = this.company[objIndex]['ship_name'];
      this.model['ship_street1'] = this.company[objIndex]['ship_street1'];
      this.model['ship_street2'] = this.company[objIndex]['ship_street2'];
      this.model['ship_city'] = this.company[objIndex]['ship_city'];
      this.model['ship_state'] = this.company[objIndex]['ship_state'];
      this.model['ship_code'] = this.company[objIndex]['ship_code'];
      this.model['ship_country'] = this.company[objIndex]['ship_country'];

    }, error => {
      console.log(error);
      console.log(error.error.text);
    });

  }


  fn_submit() {
    this.loading = true;
    console.log(this.model);
    this.http.post(this.configService.base_url() + 'sales_order/fn_insertSalesOrder',
      {
        "data": this.model,
        "module": this.module
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.router.navigate(['/salesOrder/', data['result']['id']]);
        this.uploaded.emit();

      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }


  close() {
    this.uploaded.emit();
  }
}
