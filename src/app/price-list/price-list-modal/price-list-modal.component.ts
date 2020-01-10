import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';

@Component({
  selector: 'app-price-list-modal',
  templateUrl: './price-list-modal.component.html',
  styleUrls: ['./price-list-modal.component.css']
})
export class PriceListModalComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<string>();
  
  public label: any;
  public catalog: any = [];
  public pricelist: any = [];
  public items: any = [];

  myContact: any = [];
  public loading = true;
  public id: number;
  public closeResult: string;
  id_price_list: string;
  quoteModel: any;
  isReadOnly: boolean = true;
  step: number = 1;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {

  }

  module:string = this.activatedRoute.snapshot.url[0].path;
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.url[0].path );
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'pricelist/', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.pricelist = data['result']['data'];
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  goStep2() {
    console.log(this.id_price_list);
    this.loading = true;
    this.http.get(this.configService.base_url() + 'pricelist/catalog/' + this.id_price_list, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.step = 2;
      this.loading = false;
      this.catalog = data['result']['data'];
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });

  }

  id_catalog: string;
  loading_productlist: boolean = false;
  productlist() {
    console.log(this.id_catalog);
    this.loading_productlist = true;
    this.http.get(this.configService.base_url() + 'pricelist/productlist/' + this.id_catalog, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.step = 2;
      this.loading_productlist = false;
      this.items = data['result']['data'];
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  total: number = 0;
  addProduct: any = [];
  i: number = 1;
  addList(x) {
    var temp = {
      id: this.i++,
      id_price_list: x.id,
      product: x.product
    }
    this.addProduct.push(temp); // from top as bottom
    this.total = this.addProduct.length;
    console.log(this.addProduct);
  }

  removeList(x) {
    console.log(x);
    var objIndex = this.addProduct.findIndex((obj => obj.id == x.id));
    this.addProduct.splice(objIndex, 1);
    this.total = this.addProduct.length;
  }



  save() {
    console.log(this.id);

    this.loading = true;
    this.http.post(this.configService.base_url() + 'pricelist/insermodule/',
      {
        "id" : this.id,
        "module" : this.module,
        "data": this.addProduct,
      }, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.uploaded.emit('complete');
    //  location.reload();
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }
}
