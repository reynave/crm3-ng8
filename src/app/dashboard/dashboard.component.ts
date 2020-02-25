import { Component, OnInit } from '@angular/core';

declare var $;
declare var Chart;
declare var D3Funnel;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datasetsLeadPerDistribution: any = [];
  datasetsLeadPerIndustry: any = [];
  dataFunnel:any = [];

  constructor() { }

  ngOnInit() {
    this.leadPerIndustry();
    this.leadPerDistribution();
    this.funnel();
  }


  leadPerIndustry() {
    this.datasetsLeadPerIndustry = [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],

      borderWidth: 1
    }];

    var ctx = document.getElementById('leadPerIndustry');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.datasetsLeadPerIndustry,
      },
    });
  }

  leadPerDistribution() {

    this.datasetsLeadPerDistribution = [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],

      borderWidth: 1
    }];

    var ctx = document.getElementById('leadPerDistribution');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.datasetsLeadPerDistribution,
      },
    });

  }

  funnel() {

    this.dataFunnel = [
      { label: 'Inquiries', value: 5000 },
      { label: 'Applicants', value: 2500 },
      { label: 'Admits', value: 500 },
      { label: 'Deposits', value: 200 },
    ];
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
    chart.draw(this.dataFunnel, options);
  }

}
