import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  menu :string;
  
  constructor(private router: Router) { 
 
    router.events.subscribe((val) => {
      // see also 
     // console.log(router);
    });
  }

  ngOnInit() {
    console.log('masuk');

  }

}
