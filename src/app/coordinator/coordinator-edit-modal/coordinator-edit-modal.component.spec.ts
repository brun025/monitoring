import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorEditModalComponent } from './coordinator-edit-modal.component';

describe('CoordinatorEditModalComponent', () => {
  let component: CoordinatorEditModalComponent;
  let fixture: ComponentFixture<CoordinatorEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
