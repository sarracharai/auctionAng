import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellBidComponent } from './sell-bid.component';

describe('SellBidComponent', () => {
  let component: SellBidComponent;
  let fixture: ComponentFixture<SellBidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellBidComponent]
    });
    fixture = TestBed.createComponent(SellBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
