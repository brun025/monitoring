import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaComponent } from './deleta.component';

describe('DeletaComponent', () => {
  let component: DeletaComponent;
  let fixture: ComponentFixture<DeletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
