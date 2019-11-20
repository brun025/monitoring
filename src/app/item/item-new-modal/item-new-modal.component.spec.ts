import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNewModalComponent } from './item-new-modal.component';

describe('ItemNewModalComponent', () => {
  let component: ItemNewModalComponent;
  let fixture: ComponentFixture<ItemNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
