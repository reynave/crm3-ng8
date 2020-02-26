import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  recentwins: any = [];
  recentQuotation: any = [];
  lead: any = {
    today: "0",
    month: "0",
    quarter: "0",
    year: "0",
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService
  ) {
  }


  ngOnInit() {
    this.httpGet();
   


  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'dashboard', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.lead = data['result']['lead'];

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
