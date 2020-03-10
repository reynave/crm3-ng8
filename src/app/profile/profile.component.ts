import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../service/config.service'; 


export class EditUser {
  constructor(
      public first_name:string,
      public last_name:string, 
      public password:string, 
      
  ){}

}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public label: any; 
  public itemsSelected: any = [];
  public loading: boolean = true;  
  id:string;
  model:any = [];
  items:any= [];
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
    this.http.get(this.configService.base_url() + 'profile/', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.items = data['result']['data'];
      this.model = new EditUser(
        data['result']['data']['first_name'],
        data['result']['data']['last_name'], 
        "",
      );
       
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  fn_update(){
    this.loading = true; 
    this.http.post(this.configService.base_url() + 'profile/fn_update',
      {
        "id"  : this.id,
        "data": this.model, 
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
      
        console.log(data);
        this.httpGet(); 
        this.loading = false;  
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

}
