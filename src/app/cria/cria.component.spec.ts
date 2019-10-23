import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaComponent } from './cria.component';

describe('CriaComponent', () => {
  let component: CriaComponent;
  let fixture: ComponentFixture<CriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
