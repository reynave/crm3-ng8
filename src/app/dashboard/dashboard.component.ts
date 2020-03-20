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
  recentwins: any = []; user: any = [];
  recentQuotation: any = [];
  lead: any = {
    today: "0",
    month: "0",
    quarter: "0",
    year: "0",
  }
  id: string = "0";
  period: string;

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
    console.log(this.activatedRoute.snapshot.params);
    if (this.period == "") {
      this.period = 'quarter';
    }
  }

  onPeriod(period) {
    this.period = period;
    this.httpGet(this.id);
  }

  onUser(id) {
    this.id = id;
    this.httpGet(id);
  }
  currency: string;
  account_manager: any = [];
  target: any = [];
  id_user_select: string;
  httpGet(id) {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'dashboard/index/?id=' + id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      if (data['error'] == 400) {
        window.location.href = this.configService.login();
      }
      console.log(data);
      this.currency = data['result']['currency'];
      this.id_user_select = id;
      this.target = data['result']['target'];
      this.account_manager = data['result']['account_manager'];
      this.lead = data['result']['lead'];
      this.user = data['result']['user'];
      this.event = data['result']['event'];
      this.visit = data['result']['visit'];
      this.recentwins = data['result']['recentwins'];
      this.recentQuotation = data['result']['recentQuotation'];

      this.funnel(data['result']['funnel']);
      this.leadPerIndustry(data['result']['leadPerIndustry']);
      this.leadPerDistribution(data['result']['leadPerDistribution']);
      this.salesTarget();
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
      options: {
        onClick: function (data) {
          console.log('masuk ', data);
        }
      }
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


  salesTarget() {

    var chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',
      brown: 'rgb(181,101,30)',
    };


    var barChartDataAmount = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4',],
      datasets: [
        {
          label: 'Achieve',
          backgroundColor: chartColors.red,
          stack: 'amount',
          data: [
            23, 24, 25, 25, 
          ]
        }, {
          label: 'Target',
          backgroundColor: chartColors.blue,
          stack: 'amount',
          data: [
            323, 324, 325, 325, 
          ]
        },

      ]

    };

    var barChartDataQty = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4',],
      datasets: [
        {
          label: 'Leads Achieve ',
          backgroundColor: chartColors.red,
          stack: 'leads',
          data: [
            23, 24, 25, 25, 
          ]
        }, {
          label: 'Leads Target',
          backgroundColor: chartColors.blue,
          stack: 'leads',
          data: [
            323, 324, 325,225,
          ]
        },

        {
          label: 'Opportunities Achieve ',
          backgroundColor: chartColors.red,
          stack: 'opportunities',
          data: [
            23, 24, 25,25,
          ]
        }, {
          label: 'Opportunities Target',
          backgroundColor: chartColors.blue,
          stack: 'opportunities',
          data: [
            323, 324, 325,325,
          ]
        },

        {
          label: 'Quotes Achieve ',
          backgroundColor: chartColors.red,
          stack: 'quote',
          data: [
            23, 24, 25, 26,26,
          ]
        }, {
          label: 'Quotes Target',
          backgroundColor: chartColors.blue,
          stack: 'quote',
          data: [
            323, 324, 325, 326,326,
          ]
        },
      ]

    };


    var ctx = document.getElementById('targetSalesAmount');
    new Chart(ctx, {
      type: 'bar',
      data: barChartDataAmount,
      options: {
        title: {
          display: false,
          text: 'Target Per Years'
        },
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });


    var ctx2 = document.getElementById('targetSalesQty');
    new Chart(ctx2, {
      type: 'bar',
      data: barChartDataQty,
      options: {
        title: {
          display: false,
          text: 'Target Per Years'
        },
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

}
