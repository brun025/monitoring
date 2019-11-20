import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { RequestService } from './request.service';
import { RequestShowModalComponent } from '../request-show-modal/request-show-modal.component';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  items: any;
  public paginaAtual = 1;

  @ViewChild(RequestShowModalComponent, null)
  requestShowModal: RequestShowModalComponent;

  constructor( protected requestService: RequestService) {
            this.requestService.requestListComponent = this;
  }

  ngOnInit() {
    this.requestService.getItems();
  }
}




