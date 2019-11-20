import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { TypeService } from '../type-list/type.service';

@Component({
  selector: 'type-delete-modal',
  templateUrl: './type-delete-modal.component.html',
  styleUrls: ['./type-delete-modal.component.css']
})
export class TypeDeleteModalComponent implements OnInit {
  type_id: number;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor( protected typeService: TypeService ) {
  }

  ngOnInit() {
  } 

  showModal(){
    this.modal.show();
  }

  destroy() {
    this.typeService.destroy(this.type_id);
    this.modal.hide();
  }

}



