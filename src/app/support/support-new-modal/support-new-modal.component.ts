import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { SupportService } from '../support-list/support.service';

@Component({
  selector: 'support-new-modal',
  templateUrl: './support-new-modal.component.html',
  styleUrls: ['./support-new-modal.component.css']
})
export class SupportNewModalComponent implements OnInit {
  support: any;
  resposta: any;

  @ViewChild(ModalComponent, null)
  modal: ModalComponent;

  constructor(private httpClient: HttpClient,
    protected supportService: SupportService) { }

  ngOnInit() {
    this.support = {};
    this.resposta = {};
  }

  submit(){
    this.supportService.postUser(this.support);
    this.modal.hide();
  }

  showModal(){
    this.modal.show();
  }


}

