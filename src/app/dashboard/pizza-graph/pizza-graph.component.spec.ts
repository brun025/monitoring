import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGraphComponent } from './pizza-graph.component';

describe('PizzaGraphComponent', () => {
  let component: PizzaGraphComponent;
  let fixture: ComponentFixture<PizzaGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
