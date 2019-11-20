import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { ItemService } from '../item-list/item.service';

@Component({
  selector: 'item-delete-modal',
  templateUrl: './item-delete-modal.component.html',
  styleUrls: ['./item-delete-modal.component.css']
})
export class ItemDeleteModalComponent implements OnInit {
  item_id: number;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor( protected itemService: ItemService ) {
  }

  ngOnInit() {
  } 

  showModal(){
    this.modal.show();
  }

  destroy() {
    this.itemService.destroy(this.item_id);
    this.modal.hide();
  }

}




