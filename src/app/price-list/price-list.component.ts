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
    this.model = new Newpricelist('',1,'','1');
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
          // console.log(data);
          this.submit= false;
          if (value == 'next') {
            this.model = new Newpricelist('',1,'','1');
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


  modal_newpricelist(newpricelist) {
    this.modalService.open(newpricelist, { size: 'lg' }).result.then((result) => {
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
