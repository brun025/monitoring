import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDeleteModalComponent } from './support-delete-modal.component';

describe('SupportDeleteModalComponent', () => {
  let component: SupportDeleteModalComponent;
  let fixture: ComponentFixture<SupportDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
