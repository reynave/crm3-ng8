import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  path:string;
  target:string;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
  ) { 
  }

  ngOnInit() { 
    this.path = this.activatedRoute.snapshot.params.path;
    this.target = this.activatedRoute.snapshot.params.target; 
  }

}
