import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { CoordinatorService } from '../coordinator-list/coordinator.service';

@Component({
  selector: 'coordinator-edit-modal',
  templateUrl: './coordinator-edit-modal.component.html',
  styleUrls: ['./coordinator-edit-modal.component.css']
})
export class CoordinatorEditModalComponent implements OnInit {
  _coordinator: any;
  dados: any;
  resposta: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor(protected coordinatorService: CoordinatorService) {
  }

  ngOnInit() {
    this.dados = {};
    this.resposta = {};
  }

  submit() {
    // console.log(this.dados)
    this.coordinatorService.update(this._coordinator, this.dados);
    this.modal.hide();
  }

  showModal(){
    this.modal.show();
  }
}

