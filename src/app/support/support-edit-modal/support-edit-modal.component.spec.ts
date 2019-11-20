import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportEditModalComponent } from './support-edit-modal.component';

describe('SupportEditModalComponent', () => {
  let component: SupportEditModalComponent;
  let fixture: ComponentFixture<SupportEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
