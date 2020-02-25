import { Component, OnInit } from '@angular/core';

declare var $;
declare var Chart;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  datasetsLeadPerDistribution: any =[];
  datasetsLeadPerIndustry: any =[];
  ngOnInit() {
    this.leadPerIndustry();
    this.leadPerDistribution();
  
  }


  leadPerIndustry(){
    this.datasetsLeadPerIndustry  = [{
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
    new Chart( ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.datasetsLeadPerIndustry,
      },
    });
  }

  leadPerDistribution() {
 
    this.datasetsLeadPerDistribution  = [{
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
    new Chart( ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.datasetsLeadPerDistribution,
      },
    });

  }

}
