import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListProductComponent } from './price-list-product.component';

describe('PriceListProductComponent', () => {
  let component: PriceListProductComponent;
  let fixture: ComponentFixture<PriceListProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
