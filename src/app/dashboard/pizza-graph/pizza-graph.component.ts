import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'pizza-graph',
  templateUrl: './pizza-graph.component.html',
  styleUrls: ['./pizza-graph.component.css']
})
export class PizzaGraphComponent implements OnInit {

  dados: any;
  
  constructor( protected dashboardService: DashboardService) {
    this.dashboardService.pizzaGraphComponent = this;
   }
  
  options: any

  ngOnInit(){
    this.dashboardService.getRequestStatus()
  }

  teste(){
    this.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Pedidos por status'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        name: 'Total',
        data: [
          { name: 'Pedidos em análise', y: this.dados.aguardando },
          { name: 'Pedidos cancelados', y: this.dados.cancelado },
          { name: 'Pedidos concluídos', y: this.dados.concluido },
        ]
      }]
    
    }

    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, new Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
          ]
        };
      })
    });

    Highcharts.chart('container', this.options);
  }
}