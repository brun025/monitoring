import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { PizzaGraphComponent } from '../pizza-graph/pizza-graph.component';
import { LineGraphComponent } from '../line-graph/line-graph.component';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _dashboardComponent: DashboardComponent;
  private _pizzaGraphComponent: PizzaGraphComponent;
  private _lineGraphComponent: LineGraphComponent;

  dados = {
    aguardando: [],
    cancelado: [],
    concluido: []
  };

  options: any

  private url = 'http://157.245.241.8:3000';
  lineAguardando = [0,0,0,0,0,0,0,0,0,0,0,0];
  lineCancelado = [0,0,0,0,0,0,0,0,0,0,0,0];
  lineConcluido = [0,0,0,0,0,0,0,0,0,0,0,0];

  status = {
    aguardando: 0,
    cancelado: 0,
    concluido: 0,
  };

  constructor( private httpClient: HttpClient ) { }

  set dashboardComponent(value: DashboardComponent){
    this._dashboardComponent = value;
  }

  set pizzaGraphComponent(value: PizzaGraphComponent){
    this._pizzaGraphComponent = value;
  }

  set lineGraphComponent(value: LineGraphComponent){
    this._lineGraphComponent = value;
  }

  getRequestStatus(){
    // console.log(this.url)

    const req = this.httpClient.get(`${this.url}/items/`).toPromise();

    req.then((items) => {
      // console.log(items)
      for(let i in items){
        // console.log(parseInt(items[i].date.split('-')[1]))
        //Pizza graph
        if(items[i].status == 'Aguardando'){
          this.status.aguardando += 1;
          this.lineAguardando[parseInt(items[i].date.split('-')[1]) - 1] += 1;
        }
        else if(items[i].status == 'Cancelado'){
          this.status.cancelado += 1;
          this.lineCancelado[parseInt(items[i].date.split('-')[1]) - 1] += 1;
        }
        else{
          this.status.concluido += 1;
          this.lineConcluido[parseInt(items[i].date.split('-')[1]) - 1] += 1;
        }

        //Line graph
      }

      // this._pizzaGraphComponent.dados = this.status;
      // this.dashboardComponent.init = true;
      this.pizzaGraph();

      // // console.log(this.lineAguardando, this.lineCancelado, this.lineConcluido)
      // this._lineGraphComponent.dados.aguardando = this.lineAguardando;
      // this._lineGraphComponent.dados.cancelado = this.lineCancelado;
      // this._lineGraphComponent.dados.concluido = this.lineConcluido;
      // this._lineGraphComponent.graph();
      this.graph();
    })
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
        data: this.lineAguardando
      }, {
        name: 'Concluído',
        data: this.lineConcluido
      }, {
        name: 'Cancelado',
        data: this.lineCancelado
      }]
    }

    Highcharts.chart('container-line', this.options);
  }

  pizzaGraph(){
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
          { name: 'Pedidos em análise', y: this.status.aguardando },
          { name: 'Pedidos cancelados', y: this.status.cancelado },
          { name: 'Pedidos concluídos', y: this.status.concluido },
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
