import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
// import Chart from 'chart.js/auto' - or you can write it in one line

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements AfterViewInit  {
  @ViewChild('myChartCanvas') myChartCanvas!: ElementRef;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Tokyo', 'Cluj-Napoca', 'Mexico City', 'Shanghai'],
        datasets: [{
          data: [13960000 , 308343, 22505315, 29867918],
          borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'],
          backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    return true;
  }
}
