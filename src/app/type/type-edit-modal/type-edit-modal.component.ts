import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { TypeService } from '../type-list/type.service';

@Component({
  selector: 'type-edit-modal',
  templateUrl: './type-edit-modal.component.html',
  styleUrls: ['./type-edit-modal.component.css']
})
export class TypeEditModalComponent implements OnInit {
  _type: any;
  dados: any;
  resposta: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor(protected typeService: TypeService) {
  }

  ngOnInit() {
    this.dados = {};
    this.resposta = {};
  }

  submit() {
    this.typeService.update(this._type, this.dados);
    this.modal.hide();
  }

  showModal(){
    this.modal.show();
  }
}




