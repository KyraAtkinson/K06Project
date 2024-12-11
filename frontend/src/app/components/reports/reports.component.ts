

import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.fetchChartData();
  }

  fetchChartData() {
    const token = localStorage.getItem('token');
    fetch('/api/charts/reports', {
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
    new Chart('reportsChart', {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Reports Data',
            data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA65CC'],
          },
        ],
      },
    });
  }
}

