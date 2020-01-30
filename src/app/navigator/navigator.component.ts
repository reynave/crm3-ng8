import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  current :string;
  rules:any;
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) { 
 
  }
  nav : any = [];
  ngOnInit() { 
    this.activatedRoute.data.subscribe(
      data => {  
        this.titleService.setTitle( data['title'] );
      }
    );


    
    this.nav = this.activatedRoute.snapshot.routeConfig.path.split("/")
    this.current = this.nav[0];
  }

}
