import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../service/config.service';

declare var $;
declare var Chart;
declare var D3Funnel;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public loading: boolean = true;
  datasetsLeadPerDistribution: any = [];
  datasetsLeadPerIndustry: any = [];
  event: any = [];
  visit: any = [];
  recentwins: any = []; user:any = [];
  recentQuotation: any = [];
  lead: any = {
    today: "0",
    month: "0",
    quarter: "0",
    year: "0",
  }
  id:string = "0";
  period:string;

  constructor(
    private http: HttpClient,
    
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) {
  }


  ngOnInit() {
    this.httpGet(0);
    this.period = this.activatedRoute.snapshot.params.period;
    console.log( this.activatedRoute.snapshot.params);
    if( this.period == ""){
      this.period = 'quarter';
    }
  }
  
  onPeriod(period){
    this.period = period;
    this.httpGet(this.id );
  }

  onUser(id){
   this.id = id;
   this.httpGet(id );
  }

  account_manager:any=[];
  target:any=[];
  httpGet(id) {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'dashboard/index/?id='+id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      if(data['error'] == 400){
        window.location.href= this.configService.login();
      }
      console.log(data); 
      this.target  = data['result']['target'];
      this.account_manager =  data['result']['account_manager'];
      this.lead = data['result']['lead'];
      this.user = data['result']['user'];
      this.event = data['result']['event'];
      this.visit = data['result']['visit'];
      this.recentwins = data['result']['recentwins'];
      this.recentQuotation = data['result']['recentQuotation'];

      this.funnel(data['result']['funnel']);
      this.leadPerIndustry(data['result']['leadPerIndustry']);
      this.leadPerDistribution(data['result']['leadPerDistribution']);
      this.loading = false;
    });
  }


  leadPerIndustry(leadPerIndustry) {
    // this.datasetsLeadPerIndustry = []; 
    var ctx = document.getElementById('leadPerIndustry');
    new Chart(ctx, {
      type: 'pie',
      data: leadPerIndustry,
    });
  }

  leadPerDistribution(leadPerDistribution) { 
    var ctx = document.getElementById('leadPerDistribution');
    new Chart(ctx, {
      type: 'pie',
      data: leadPerDistribution,
    });

  }

  funnel(dataFunnel) {


    const options = {
      block: {
        dynamicHeight: true,
        minHeight: 15,
        highlight: true,
        barOverlay: true,
      },
      chart: {
        bottomPinch: true,
        curve: {
          enabled: true,
        }
      }
    };

    const chart = new D3Funnel('#funnel');
    chart.draw(dataFunnel, options);
  }

}
