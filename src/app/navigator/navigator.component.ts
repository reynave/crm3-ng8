import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SortablejsOptions } from 'ngx-sortablejs';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  public loading = true;
  current :string;
  rules:any;
  nav : any = [];
  username : string;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute, 
    private configService: ConfigService,
    private router: Router,
    private titleService: Title, 
  ) { }
 
  ngOnInit() { 
    this.activatedRoute.data.subscribe(
      data => {  
        this.titleService.setTitle( data['title'] );
      }
    );   
   
    this.username =  this.configService.username();
    this.nav = this.activatedRoute.snapshot.routeConfig.path.split("/")
    this.current = this.nav[0];
  }

  signout(){
    

    window.location.href= this.configService.base_url()+'login/signout';
  }

}
