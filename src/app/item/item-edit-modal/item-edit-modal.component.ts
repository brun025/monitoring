import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { ItemService } from '../item-list/item.service';

@Component({
  selector: 'item-edit-modal',
  templateUrl: './item-edit-modal.component.html',
  styleUrls: ['./item-edit-modal.component.css']
})
export class ItemEditModalComponent implements OnInit {
  _item: any;
  types: any;
  dados: any;
  resposta: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor(protected itemService: ItemService) {
  }

  ngOnInit() {
    this.dados = {};
    this.resposta = {};
  }

  submit() {
    this.itemService.update(this._item, this.dados);
    this.modal.hide();
  }

  showModal(types){
    this.types = types;
    this.modal.show();
  }
}





