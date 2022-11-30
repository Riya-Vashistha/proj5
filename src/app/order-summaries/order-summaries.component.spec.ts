import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummariesComponent } from './order-summaries.component';

describe('OrderSummariesComponent', () => {
  let component: OrderSummariesComponent;
  let fixture: ComponentFixture<OrderSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
