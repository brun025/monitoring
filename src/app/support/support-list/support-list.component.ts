import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { SupportService } from './support.service';
import { SupportNewModalComponent } from '../support-new-modal/support-new-modal.component';
import { SupportEditModalComponent } from '../support-edit-modal/support-edit-modal.component';
import { SupportDeleteModalComponent } from '../support-delete-modal/support-delete-modal.component';

@Component({
  selector: 'support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {
  supports: any;

  @ViewChild(SupportNewModalComponent, null)
  supportNewModal: SupportNewModalComponent;

  @ViewChild(SupportEditModalComponent, null)
  supportEditModal: SupportEditModalComponent;

  @ViewChild(SupportDeleteModalComponent, null)
  supportDeleteModal: SupportDeleteModalComponent;


  constructor( protected supportService: SupportService) {
            this.supportService.supportListComponent = this;
  }

  ngOnInit() {
    this.supportService.getSupports()
  }

}

