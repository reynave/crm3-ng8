import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.css']
})
export class ReloginComponent implements OnInit {

  constructor(
    private router : Router,
    private configService : ConfigService
  ) { }

  ngOnInit() {
  }

  relogin(){
 this.configService.logout();

  }
}
