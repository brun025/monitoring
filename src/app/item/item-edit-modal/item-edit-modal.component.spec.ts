import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditModalComponent } from './item-edit-modal.component';

describe('ItemEditModalComponent', () => {
  let component: ItemEditModalComponent;
  let fixture: ComponentFixture<ItemEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
