import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeleteModalComponent } from './item-delete-modal.component';

describe('ItemDeleteModalComponent', () => {
  let component: ItemDeleteModalComponent;
  let fixture: ComponentFixture<ItemDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
