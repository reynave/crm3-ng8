import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router: Router, 
  ) { }

  ngOnInit() {

    this.http.get('https://s01.crm.co.id/api/demo/', { responseType: 'json' })
      .subscribe(data => { this.items = data['quotes']; console.log(this.items); this.loading = false; });

  }

}
