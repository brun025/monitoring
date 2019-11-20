import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { TypeService } from './type.service';
import { TypeNewModalComponent } from '../type-new-modal/type-new-modal.component';
import { TypeEditModalComponent } from '../type-edit-modal/type-edit-modal.component';
import { TypeDeleteModalComponent } from '../type-delete-modal/type-delete-modal.component';

@Component({
  selector: 'type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  types: any;

  @ViewChild(TypeNewModalComponent, null)
  typeNewModal: TypeNewModalComponent;

  @ViewChild(TypeEditModalComponent, null)
  typeEditModal: TypeEditModalComponent;

  @ViewChild(TypeDeleteModalComponent, null)
  typeDeleteModal: TypeDeleteModalComponent;


  constructor( protected typeService: TypeService) {
            this.typeService.typeListComponent = this;
  }

  ngOnInit() {
    this.typeService.getTypes()
  }

}



