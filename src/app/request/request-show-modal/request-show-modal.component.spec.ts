import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestShowModalComponent } from './request-show-modal.component';

describe('RequestShowModalComponent', () => {
  let component: RequestShowModalComponent;
  let fixture: ComponentFixture<RequestShowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestShowModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestShowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
