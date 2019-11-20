import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { ItemService } from '../item-list/item.service';
import { TypeService } from '../../type/type-list/type.service';

@Component({
  selector: 'item-new-modal',
  templateUrl: './item-new-modal.component.html',
  styleUrls: ['./item-new-modal.component.css']
})
export class ItemNewModalComponent implements OnInit {
  item: any;
  types: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor( protected itemService: ItemService ) { }

  ngOnInit() {
    this.item = {};
  }

  submit(){
    this.itemService.post(this.item);
    this.modal.hide();
  }

  showModal(types){
    this.types = types;
    this.modal.show();
  }


}



