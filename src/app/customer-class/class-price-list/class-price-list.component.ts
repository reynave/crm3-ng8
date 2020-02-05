import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';

@Component({
  selector: 'app-class-price-list',
  templateUrl: './class-price-list.component.html',
  styleUrls: ['./class-price-list.component.css']
})
export class ClassPriceListComponent implements OnInit {
  public label: any;
  public catalog: any = [];
  public pricelist: any = [];
  loading: boolean = false;
  id: string;
  company_class: any = [];
  id_company_class: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {

  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'company_class/', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.company_class = data['result']['data'];
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  loading_productlist: boolean = false;
  productlist() {
    this.loading_productlist = true;
    this.http.get(this.configService.base_url() + 'company_class/price_list/' + this.id_company_class, {
      headers: this.configService.headers()
    }).subscribe(data => {
    
      this.loading_productlist = false;
      this.pricelist = data['result']['data'];
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  update(x) {
   
    this.loading = true;
    this.http.post(this.configService.base_url() + 'company_class/update_price',
      {
        "id" : this.id_company_class,
        "data": x
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.loading = false; 
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );

  }


  erase(x){
    this.loading = true;
    this.http.post(this.configService.base_url() + 'company_class/erase_price',
      {
        "id" : this.id_company_class,
        "data": x
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.loading = false; 
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );
  }
}
