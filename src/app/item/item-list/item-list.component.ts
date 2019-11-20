import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { ItemService } from './item.service';
import { ItemNewModalComponent } from '../item-new-modal/item-new-modal.component';
import { ItemEditModalComponent } from '../item-edit-modal/item-edit-modal.component';
import { ItemDeleteModalComponent } from '../item-delete-modal/item-delete-modal.component';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any;
  types: any;
  searchText: any;
  public paginaAtual = 1;

  @ViewChild(ItemNewModalComponent, null)
  itemNewModal: ItemNewModalComponent;

  @ViewChild(ItemEditModalComponent, null)
  itemEditModal: ItemEditModalComponent;

  @ViewChild(ItemDeleteModalComponent, null)
  itemDeleteModal: ItemDeleteModalComponent;


  constructor( protected itemService: ItemService) {
            this.itemService.itemListComponent = this;
  }

  ngOnInit() {
    this.itemService.getItems();
    this.types = this.itemService.getTypes();
  }
}



