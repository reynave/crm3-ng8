import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-master-currency',
  templateUrl: './master-currency.component.html',
  styleUrls: ['./master-currency.component.css']
})
export class MasterCurrencyComponent implements OnInit {

  public items: any = [];
  itemDetail: any = [];
  public loading: boolean = true;
  public id: number;
  newName: string = "";
  isReadonly: boolean = true;
  isUpdate: boolean = false;
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
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'currency', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      console.log(data);
      this.loading = false;
    });
  }

  update(x) {
    this.isUpdate = true;
    console.log(x);
    this.http.post(this.configService.base_url() + 'currency/update',
      {
        "data": x
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.isUpdate = false;
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
  }


  insert() {
    if (this.newName != "") {


      this.http.post(this.configService.base_url() + 'currency/insert',
        {
          "name": this.newName
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          this.httpGet();
          this.newName = "";
        },
        error => {
          // console.log(error);
          // console.log(error.error.text);
        }
      );
    }
  }




  fn_delete(x) {

    this.http.post(this.configService.base_url() + 'currency/fn_delete',
      {
        "data": x
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.httpGet();
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
  }


}
