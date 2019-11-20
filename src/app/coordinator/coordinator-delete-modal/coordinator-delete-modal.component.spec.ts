import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDeleteModalComponent } from './coordinator-delete-modal.component';

describe('CoordinatorDeleteModalComponent', () => {
  let component: CoordinatorDeleteModalComponent;
  let fixture: ComponentFixture<CoordinatorDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
