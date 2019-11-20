import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeleteModalComponent } from './type-delete-modal.component';

describe('TypeDeleteModalComponent', () => {
  let component: TypeDeleteModalComponent;
  let fixture: ComponentFixture<TypeDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
