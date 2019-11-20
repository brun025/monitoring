import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { CoordinatorService } from '../coordinator-list/coordinator.service';

@Component({
  selector: 'coordinator-delete-modal',
  templateUrl: './coordinator-delete-modal.component.html',
  styleUrls: ['./coordinator-delete-modal.component.css']
})
export class CoordinatorDeleteModalComponent implements OnInit {
  cliente: any;
  resposta: any;
  _coordinator_id: number;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor(private httpClient: HttpClient,
    protected coordinatorService: CoordinatorService,) {
  }

  ngOnInit() {
    this.cliente = {};
    this.resposta = {};
  } 

  showModal(){
    this.modal.show();
  }

  destroy() {
    this.coordinatorService.destroy(this._coordinator_id);
    this.modal.hide();
  }

}
