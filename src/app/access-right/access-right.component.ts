import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewAccessRight } from './access-right';

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
  accessRules: any = [];
  model: any = new NewAccessRight('');
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

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onSubmit() { 
    this.http.post(this.configService.base_url() + 'access_right/onSubmit',
      {
        "data": this.model
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.model = new NewAccessRight('');
        this.router.navigate(['/accessRight/', data['result']['id']]);
        this.modalService.dismissAll(); 
      }, 
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );

  }
}
