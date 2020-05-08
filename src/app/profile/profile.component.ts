import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../service/config.service'; 
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewTargetAmount } from './../user/user';

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

  @ViewChild('content', { static: true }) private content;

  public label: any; 
  public itemsSelected: any = [];
  public loading: boolean = true;  
  id:string;
  model:any = [];
  items:any= [];
  data:any= [];
  target:any = [];
  list:any= [];
  user_access:any=[];
  user_group:any=[];
  user_target:any=[];
  user_name:string;
  id_user : string;
  newTargetAmount: any = new NewTargetAmount('', '0', '0', '0', '0');
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,  
    private configService: ConfigService,
    
    private modalService: NgbModal,
    config: NgbModalConfig,
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
 
  ngOnInit() { 
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpGet(); 
  }
  totalTeamTarget  :any;
  httpGet() {
    this.loading = true; 
    this.http.get(this.configService.base_url() + 'profile/', {
      headers: this.configService.headers()
    }).subscribe(data => { 
      console.log(data);
      this.data = data['result']['data'];
      this.items =  data['result']['list'];
      this.target = data['result']['target'];
      this.totalTeamTarget = data['result']['totalTeamTarget'];
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

 

  fnOpen(id_user){
    
    this.id_user = id_user;
    this.user_target = []; 

    this.loading = true; 
    this.http.get(this.configService.base_url() + 'profile/user_target/'+id_user, {
      headers: this.configService.headers()
    }).subscribe(data => { 
      this.user_name = data['result']['user_name'];
      this.user_target = data['result']['user_target'];
      this.modalService.open(this.content, { size: 'lg' } );
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });


  }

  fn_insertTargetAmount() {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'profile/fn_insertTargetAmount',
      {
        "id": this.id_user,
        "data": this.newTargetAmount,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
        this.loading = false;
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }
 
  fn_targetUpdate() {
    console.log( this.id_user, this.user_target);
    this.loading = true;
    this.http.post(this.configService.base_url() + 'profile/fn_targetUpdate',
      {
        "id": this.id_user,
        "user_target": this.user_target,
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

  fn_tergetDelete(id) {
    var objIndex = this.user_target.findIndex((obj => obj.id == id));
    this.user_target.splice(objIndex, 1);
    this.http.post(this.configService.base_url() + 'user/fn_deleteTarget',
      {
        "id": id
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data); 
        this.httpGet();
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );


  }

}
