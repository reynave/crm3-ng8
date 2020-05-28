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
  currency: string;
  account_manager: any = [];
  target: any = [];
  id_user_select: string;
  totalLS : number = 0;
  totalLI : number = 0;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) { }


  ngOnInit() {
  
    this.period = this.activatedRoute.snapshot.params.period; 
    if (!this.activatedRoute.snapshot.params.period) {
      this.period = 'quarter';
    } 
    this.httpGet(0);

  }

  onPeriod(period) {
    //this.period = period;
    //this.httpGet(this.id);
    this.loading = true;
    this.router.navigate(['/dashboard/',period ]);
    setInterval(function(){ 
      window.location.reload(); 
     }, 300);

  }

  onUser(id) {
    this.id = id;
    this.httpGet(id);
  }
 
  httpGet(id) {
    this.loading = true;
    var url = this.configService.base_url() + 'dashboard/index/?id=' + id + "&period=" + this.period;
 
    this.http.get(url, {
      headers: this.configService.headers()
    }).subscribe(data => {
      if (data['error'] == 400) {
        window.location.href = this.configService.login();
      }
  
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
      
      this.leadPerDistribution(data['result']['leadPerDistribution']);
      this.totalLS = data['result']['totalLS'];

      this.leadPerIndustry(data['result']['leadPerIndustry']);
      this.totalLI = data['result']['totalLI'];

      var chartColors = {
        style1a: 'rgb(30, 178, 166)',
        style1b: 'rgb(212, 248, 232)',

        style2a: 'rgb(246, 200, 159)',
        style2b: 'rgb(255, 231, 209)',

        style3a: 'rgb(50, 130, 184)',
        style3b: 'rgb(187, 225, 250)',

        style4a: 'rgb(74, 105, 187)',
        style4b: 'rgb(154, 206, 255)',

      };

      var barChartDataQty = {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4',],
        datasets: [
          {
            label: 'Leads Achieve ',
            backgroundColor: chartColors.style1a,
            stack: 'leads',
            data: [
              23, 24, 25, 25,
            ]
          }, {
            label: 'Leads Target',
            backgroundColor: chartColors.style1b,
            stack: 'leads',
            data: [
              323, 324, 325, 225,
            ]
          },

          {
            label: 'Opportunities Achieve ',
            backgroundColor: chartColors.style2a,
            stack: 'opportunities',
            data: [
              23, 24, 25, 25,
            ]
          }, {
            label: 'Opportunities Target',
            backgroundColor: chartColors.style2b,
            stack: 'opportunities',
            data: [
              323, 324, 325, 325,
            ]
          },

          {
            label: 'Quotes Achieve ',
            backgroundColor: chartColors.style3a,
            stack: 'quote',
            data: [
              23, 24, 25, 26, 26,
            ]
          }, {
            label: 'Quotes Target',
            backgroundColor: chartColors.style3b,
            stack: 'quote',
            data: [
              323, 324, 325, 326, 326,
            ]
          },
        ]

      };

      console.log(data['result']['barChartDataAmount'], data['result']['barChartDataQty']);
      this.salesTarget(data['result']['barChartDataAmount'], data['result']['barChartDataQty'], data['result']['currency']);
      this.loading = false;
    });
  }


  leadPerIndustry(leadPerIndustry) {
    // this.datasetsLeadPerIndustry = []; 
    var ctx = document.getElementById('leadPerIndustry');
    new Chart(ctx, {
      type: 'pie',
      data: leadPerIndustry,
      options: {
        datalabels: {
             formatter: (value, ctx) => {
                 let sum = 0;
                 let dataArr = ctx.chart.data.datasets[0].data;
                 dataArr.map(data => {
                     sum += data;
                 });
                 let percentage = (value*100 / sum).toFixed(2)+"%";
                 return percentage;
             },
             color: '#fff',
         },
       
     }
    });
  }

  leadPerDistribution(leadPerDistribution) {
    var ctx = document.getElementById('leadPerDistribution');
    new Chart(ctx, {
      type: 'pie',
      data: leadPerDistribution,
      options: {
         datalabels: {
              formatter: (value, ctx) => {
                  let sum = 0;
                  let dataArr = ctx.chart.data.datasets[0].data;
                  dataArr.map(data => {
                      sum += data;
                  });
                  let percentage = (value*100 / sum).toFixed(2)+"%";
                  return percentage;
              },
              color: '#fff',
          },
       
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


  salesTarget(barChartDataAmount, barChartDataQty, currency) {

    var formatter = new Intl.NumberFormat('en-US');

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
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {

              console.log(data);

              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ' : ' + currency + ' thousand million';
              }
              label += formatter.format(Math.round(tooltipItem.yLabel * 100) / 100);
              console.log(label);
              return label;
            }
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,

            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return currency + ' ' + formatter.format(value);
              },
              beginAtZero: true
            }
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
          mode: 'nearest',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,

          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
