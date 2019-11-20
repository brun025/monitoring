import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { CoordinatorService } from '../coordinator-list/coordinator.service';

@Component({
  selector: 'coordinator-new-modal',
  templateUrl: './coordinator-new-modal.component.html',
  styleUrls: ['./coordinator-new-modal.component.css']
})
export class CoordinatorNewModalComponent implements OnInit {

  coordinator: any;
  resposta: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor(private httpClient: HttpClient,
    protected coordinatorService: CoordinatorService) { }

  ngOnInit() {
    this.coordinator = {};
    this.resposta = {};
  }

  submit(){
    this.coordinatorService.postUser(this.coordinator);
    this.modal.hide();
  }

  showModal(){
    this.modal.show();
  }


}
