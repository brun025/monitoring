import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { SupportService } from '../support-list/support.service';

@Component({
  selector: 'support-edit-modal',
  templateUrl: './support-edit-modal.component.html',
  styleUrls: ['./support-edit-modal.component.css']
})
export class SupportEditModalComponent implements OnInit {
  _support: any;
  dados: any;
  resposta: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor(protected supportService: SupportService) {
  }

  ngOnInit() {
    this.dados = {};
    this.resposta = {};
  }

  submit() {
    // console.log(this.dados)
    this.supportService.update(this._support, this.dados);
    this.modal.hide();
  }

  showModal(){
    this.modal.show();
  }
}


