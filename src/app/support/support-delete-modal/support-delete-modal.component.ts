import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { SupportService } from '../support-list/support.service';
import { SupportListComponent } from '../support-list/support-list.component';

@Component({
  selector: 'support-delete-modal',
  templateUrl: './support-delete-modal.component.html',
  styleUrls: ['./support-delete-modal.component.css']
})
export class SupportDeleteModalComponent implements OnInit {
  support_id: number;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor( protected supportService: SupportService ) {
  }

  ngOnInit() {
  } 

  showModal(){
    this.modal.show();
  }

  destroy() {
    this.supportService.destroy(this.support_id);
    this.modal.hide();
  }

}

