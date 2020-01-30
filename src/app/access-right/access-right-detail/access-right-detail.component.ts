import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-access-right-detail',
  templateUrl: './access-right-detail.component.html',
  styleUrls: ['./access-right-detail.component.css']
})
export class AccessRightDetailComponent implements OnInit {
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
    this.http.get(this.configService.base_url() + 'access_right/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => { 
      console.log(data); 
      this.items = data['result'];
      this.loading = false;
    });
  }

  update(){
    this.loading = true;
    this.http.post(this.configService.base_url() + 'access_right/update',
      { 
        "id": this.items['id_user_access'],
        "data": this.items['user_access_rules']
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        if(data['error'] == 0){
          localStorage.setItem('crm3ng8Rules',JSON.stringify(data))
        }
        console.log(data);  
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  
  

}
