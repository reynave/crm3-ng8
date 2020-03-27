import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
 

@Component({
  selector: 'app-sales-target',
  templateUrl: './sales-target.component.html',
  styleUrls: ['./sales-target.component.css']
})
export class SalesTargetComponent implements OnInit {
  year : string;
  public items: any = []; 
  public loading: boolean = true;  
  public id: number;  
  id_user: string = "1"; 
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
    console.log(this.items);
    this.httpGet();

  }

  httpGet() {
    this.loading = true; 
    this.http.get(this.configService.base_url() + 'report_sales_target', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data']; 
      this.year = data['result']['year']; 
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

   

  
 
 
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

   
 

}

 
 