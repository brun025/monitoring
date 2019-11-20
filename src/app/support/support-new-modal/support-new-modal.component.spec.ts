import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNewModalComponent } from './support-new-modal.component';

describe('SupportNewModalComponent', () => {
  let component: SupportNewModalComponent;
  let fixture: ComponentFixture<SupportNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
