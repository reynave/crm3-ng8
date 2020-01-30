import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SortablejsOptions } from 'ngx-sortablejs';
import { ConfigService } from './../service/config.service'; 
 
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public label: any;
  public items: any;
  public loading = true;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute, 
    private configService: ConfigService
  ) { 
  }

  ngOnInit() {

    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'quote/', {
      headers: this.configService.headers()
    }).subscribe(data => {

      this.loading = false;
      this.items = data['result']['data']; 
      console.log(data);

    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

}
