import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'request-show-modal',
  templateUrl: './request-show-modal.component.html',
  styleUrls: ['./request-show-modal.component.css']
})
export class RequestShowModalComponent implements OnInit {
  dados: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor() { }

  ngOnInit() {
    this.dados = {};
  }

  showModal(){
    this.modal.show();
  }
}






