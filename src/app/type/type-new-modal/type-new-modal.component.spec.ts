import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNewModalComponent } from './type-new-modal.component';

describe('TypeNewModalComponent', () => {
  let component: TypeNewModalComponent;
  let fixture: ComponentFixture<TypeNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
