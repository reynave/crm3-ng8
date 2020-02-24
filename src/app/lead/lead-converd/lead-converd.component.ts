import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lead-converd',
  templateUrl: './lead-converd.component.html',
  styleUrls: ['./lead-converd.component.css']
})
export class LeadConverdComponent implements OnInit {

  public items: any = {
    user : {
      id:"",  name:"",
    },
    lead : {
      id:"",  name:"",
    },
    company : {
      id:"",  name:"",
    },
    contact : {
      id:"",  name:"",
    },
    opportunity : {
      id:"",  name:"",
    },
    convert : {
      date:"",  
      id_user:"",
      user:"",
    },

  };
  public loading = true;
  public id: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private configService: ConfigService
  ) { 
  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
   
    this.httpGet(); 
  }
  httpGet() { 
    this.http.get(this.configService.base_url() + 'lead/converted/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.items = data['result']['data'];
      this.loading = false;
    });

  }
}
