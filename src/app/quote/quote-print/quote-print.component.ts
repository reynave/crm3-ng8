import { Component, OnInit  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 
import { ConfigService } from './../../service/config.service'; 
 

@Component({
  selector: 'app-quote-print',
  templateUrl: './quote-print.component.html',
  styleUrls: ['./quote-print.component.css']
})
export class QuotePrintComponent implements OnInit  {
 
  public label: any;
  public items: any = [];
  quote_item: any = [];
  myContact: any = [];
  public loading = true;
  public id: number;
  public closeResult: string;
  quoteModel: any = [];
  isReadOnly: boolean = true;
  total: string;
  pricing: any = []; 
 
  test:any="gagagg";
  
  constructor(
    private http: HttpClient, 
    private activatedRoute: ActivatedRoute, 
    private configService: ConfigService
  ) { 
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.quoteModel = {
      expirationDate: {
        year: 0,
        month: 0,
        day: 0,
      }
    }
    this.httpGet();
  
  }
 
  quote_status: any = []; 
  httpGet() { 
    this.http.get(this.configService.base_url() + 'quote/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.items = data['result']['data'];
      this.quote_item = data['result']['quote_item'];
      this.pricing = data['result']['pricing']; 
      this.quote_status = data['result']['quote_status'];
      this.total = data['result']['total']; 
    
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

   
  print(){
    window.print();
  }
 

 

}
