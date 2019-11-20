import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaGraphComponent } from '../pizza-graph/pizza-graph.component';
import { LineGraphComponent } from '../line-graph/line-graph.component';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(PizzaGraphComponent, null)
  pizzaGraphComponent: PizzaGraphComponent;

  @ViewChild(LineGraphComponent, null)
  lineGraphComponent: LineGraphComponent;

  init: boolean;

  constructor( protected dashboardService: DashboardService) {
    this.dashboardService.dashboardComponent = this;
  }

  ngOnInit() {
    this.dashboardService.getRequestStatus();
    this.init = false;
  }
}
