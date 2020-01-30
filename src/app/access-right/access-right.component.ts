import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-access-right',
  templateUrl: './access-right.component.html',
  styleUrls: ['./access-right.component.css']
})
export class AccessRightComponent implements OnInit {
  public label: any;
  public items: any = [];
  public loading = true;
  public id: number;
  accessRules : any = [];

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
    this.httpGet(); 
  } 
 
  httpGet() { 
    this.loading = true;
    this.http.get(this.configService.base_url() + 'access_right/', {
      headers: this.configService.headers()
    }).subscribe(data => { 
      console.log(data); 
      this.items = data['result']['user_access'];
      this.loading = false;
    });
  }

}
