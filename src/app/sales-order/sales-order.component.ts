import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SortablejsOptions } from 'ngx-sortablejs'; 
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from './../service/config.service'; 

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
  public label: any;
  public items: any;
  public loading = true;

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
    this.httpGet();
  }

  requestEmit(event) { 
    this.modalService.dismissAll();
  }



  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'sales_order/', {
      headers: this.configService.headers()
    }).subscribe(data => {

      this.loading = false;
      this.items = data['result']['data']; 
   

    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }


  open(content) {
    this.modalService.open(content);
  }

}
