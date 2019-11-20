import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorListComponent } from './coordinator-list.component';

describe('CoordinatorListComponent', () => {
  let component: CoordinatorListComponent;
  let fixture: ComponentFixture<CoordinatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
