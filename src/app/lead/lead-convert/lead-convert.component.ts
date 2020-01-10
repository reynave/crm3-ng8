import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service'; 
import { LeadDetail, SelectUser, Opportunity } from './../lead';

@Component({
  selector: 'app-lead-convert',
  templateUrl: './lead-convert.component.html',
  styles: []
})
export class LeadConvertComponent implements OnInit {
  public label: any;
  public items: any = [];
  public loading = true;
  public id:number;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private configService: ConfigService
  ) { 
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpGet();
  }

 
  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'lead/converted/'+ this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.items = data['result']['data'];
    },  error => {
      console.log(error);
      console.log(error.error.text);
    }
    
    );
  }

}
