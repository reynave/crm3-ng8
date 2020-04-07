import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service'; 
import { EditAccount } from './account'; 

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public items: any = []; 
  public loading: boolean = true;  
  model : any =  new EditAccount('','','','','','','','');
  user : any = [];
  isReadonly: boolean = true;
  isUpdate: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router, 
    private configService: ConfigService
  ) {
   
  }

  ngOnInit() {
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'account', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.user = data['result']['user'];
      
      this.model =  new EditAccount(
        data['result']['data']['id'],
        data['result']['data']['id_user'],
        data['result']['data']['company'],
        data['result']['data']['address'],
        data['result']['data']['key'],
        data['result']['data']['uniqueMachineID'], 
        data['result']['data']['start_date'], 
        data['result']['data']['expired_date'], 
      );
     // console.log(data);
      this.loading = false;
    });
  }

  onSubmit() {
    this.isUpdate = true;
    this.loading = true;
   
    this.http.post(this.configService.base_url() + 'account/fnUpdate',
      {
        "data": this.model
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.isUpdate = false;
        this.loading = false;
      },
      error => {
         console.log(error);
         console.log(error.error.text);
      }
    );
  }
 

}
