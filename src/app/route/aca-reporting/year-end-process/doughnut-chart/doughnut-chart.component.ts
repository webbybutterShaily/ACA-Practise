import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit,OnChanges {
  constructor() {}
  @Input() doughnutChartLabels: any = [];
  @Input() doughnutChartData: any = [];

  chart: any ;

  ngOnInit(): void {
   
    
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Passed Safe Harbor', 'Failed Safe Harbor'],
        datasets: [
          {
            data: this.doughnutChartData,
            backgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBackgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            borderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBorderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        cutout: 90,
        radius: 100,
      },
    });
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes)
      console.log(this.doughnutChartData)
      // this.chart.data.datasets.data = this.doughnutChartData
      console.log(this.chart);
  }

  // public doughnutChartLabels: string[] = [
  //   'Passed Safe Harbor',
  //   'Failed Safe Harbor',
  // ];

  // doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  //   {
  //     data: this.doughnutChartData,
  //     label: 'Series A',
  //     backgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
  //     hoverBackgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
  //     borderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
  //     hoverBorderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
  //   },
  // ];

  // doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  //   responsive: true,
  //   cutout: 100,
  //   radius: 100,
  // };
}
