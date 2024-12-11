


import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.fetchChartData();
  }

  fetchChartData() {
    const token = localStorage.getItem('token');
    fetch('/api/charts/summary', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.createChart(data.labels, data.data);
      })
      .catch((error) => console.error('Error fetching chart data:', error));
  }

  createChart(labels: string[], data: number[]) {
    new Chart('summaryChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Summary Data',
            data,
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
          },
        ],
      },
    });
  }
}
