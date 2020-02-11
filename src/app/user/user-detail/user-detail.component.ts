import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service'; 
import { EditUser } from './../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit { 

  public label: any; 
  public itemsSelected: any = [];
  public loading: boolean = true;  
  id:string;
  model:any = [];
  
  user_access:any=[];
  user_group:any=[];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,  
    private configService: ConfigService
  ) { 
  }


  ngOnInit() { 
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpGet(); 
  }

  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get(this.configService.base_url() + 'user/detail/'+this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.model = new EditUser(
        data['result']['data']['first_name'],
        data['result']['data']['last_name'],

        data['result']['data']['id_user_access'],
        data['result']['data']['id_user_group'],

        data['result']['data']['code'],
        data['result']['data']['max_discount'],
        
        data['result']['data']['email'],
        false
      );
      this.user_access = data['result']['user_access'];
      this.user_group = data['result']['user_group'];
      
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  fn_update(){
    this.loading = true; 
    this.http.post(this.configService.base_url() + 'user/fn_update',
      {
        "id"  : this.id,
        "data": this.model, 
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;  
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

   
}
