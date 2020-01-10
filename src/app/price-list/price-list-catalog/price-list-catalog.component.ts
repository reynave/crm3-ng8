import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { Newcataloglist } from './../price-list';

@Component({
  selector: 'app-price-list-catalog',
  templateUrl: './price-list-catalog.component.html',
  styleUrls: ['./price-list-catalog.component.css']
})
export class PriceListCatalogComponent implements OnInit {
  public label: any;
  public items: any;
  public loading = true;
  public closeResult: string;
  pricelist:string;
  editable:boolean = false;
  model:any;
  id:number;
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
      this.model = new Newcataloglist(this.id,'','','1');
  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'pricelist/catalog/'+this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.configService.errorToken(data);   
      this.items = data['result']['data']; 
      this.pricelist = data['result']['pricelist'];
      this.loading = false;
    });
  }


  submit:boolean= false;
  
  onSubmit(value = "") {

    this.submit= true;
    this.http.post(this.configService.base_url() + 'pricelist/insert_catalog',
      {
        "data": this.model
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          // console.log(data);
          this.submit= false;
          if (value == 'next') {
            this.model = new Newcataloglist(this.id,'','','1');
            this.httpGet(); 
          }
          else {
            this.router.navigate(['/priceList/product/',data['result']['id'] ]);
            this.modalService.dismissAll();
          }
        

        },
        error => {
          // console.log(error);
          // console.log(error.error.text);
        }
      );
  }
  
  modal(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
