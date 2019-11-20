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
  selector: 'line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {
  dados = {
    aguardando: [],
    cancelado: [],
    concluido: []
  };
  
  constructor( protected dashboardService: DashboardService) {
    this.dashboardService.lineGraphComponent = this;
   }
  
  options: any

  ngOnInit(){
    // this.dashboardService.getRequestStatus()

  }

  graph(){
    // console.log(this.dados)
    this.options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Pedidos por mês'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      },
      yAxis: {
        title: {
          text: 'Quantidade'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Aguardando',
        data: this.dados.aguardando
      }, {
        name: 'Concluído',
        data: this.dados.concluido
      }, {
        name: 'Cancelado',
        data: this.dados.cancelado
      }]
    }

    Highcharts.chart('container-line', this.options);
  }
}
