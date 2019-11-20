import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { TypeService } from '../type-list/type.service';

@Component({
  selector: 'type-new-modal',
  templateUrl: './type-new-modal.component.html',
  styleUrls: ['./type-new-modal.component.css']
})
export class TypeNewModalComponent implements OnInit {
  type: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor( protected typeService: TypeService ) { }

  ngOnInit() {
    this.type = {};
  }

  submit(){
    this.typeService.post(this.type);
    this.modal.hide();
  }

  showModal(){
    this.modal.show();
  }


}



