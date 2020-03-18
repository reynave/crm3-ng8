import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-converted',
  templateUrl: './converted.component.html',
  styleUrls: ['./converted.component.css']
})
export class ConvertedComponent implements OnInit {

  public items: any;
  id_user:string;
  public loading: boolean = true;
  public id: number;
  total:string;
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
    this.id_user = this.configService.id_user();
    this.httpGet();
  }
  
  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'converted', {
      headers: this.configService.headers()
    }).subscribe(data => {  
      this.total = data['result']['total'];  
      this.items = data['result']['data']; 
      this.loading = false;
    });
  }

  

}
