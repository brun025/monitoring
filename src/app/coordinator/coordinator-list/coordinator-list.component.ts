import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../home/home/home.service';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { CoordinatorService } from './coordinator.service';
import { HttpClient } from '@angular/common/http';
import { CoordinatorNewModalComponent } from '../coordinator-new-modal/coordinator-new-modal.component';
import { CoordinatorEditModalComponent } from '../coordinator-edit-modal/coordinator-edit-modal.component';
import { CoordinatorDeleteModalComponent } from '../coordinator-delete-modal/coordinator-delete-modal.component';

@Component({
  selector: 'coordinator-list',
  templateUrl: './coordinator-list.component.html',
  styleUrls: ['./coordinator-list.component.css']
})
export class CoordinatorListComponent implements OnInit {

  coordinators: any;

  @ViewChild(CoordinatorNewModalComponent, null)
  coordinatorNewModal: CoordinatorNewModalComponent;

  @ViewChild(CoordinatorEditModalComponent, null)
  coordinatorEditModal: CoordinatorEditModalComponent;

  @ViewChild(CoordinatorDeleteModalComponent, null)
  coordinatorDeleteModal: CoordinatorDeleteModalComponent;


  constructor( private httpClient: HttpClient,
               protected homeService: HomeService,
               protected coordinatorService: CoordinatorService) {
            this.coordinatorService.coordinatorListComponent = this;
  }

  ngOnInit() {
    this.coordinatorService.getCoordinators()
  }

}
