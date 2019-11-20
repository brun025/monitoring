import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorNewModalComponent } from './coordinator-new-modal.component';

describe('CoordinatorNewModalComponent', () => {
  let component: CoordinatorNewModalComponent;
  let fixture: ComponentFixture<CoordinatorNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
