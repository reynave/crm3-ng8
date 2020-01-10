import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListCatalogComponent } from './price-list-catalog.component';

describe('PriceListCatalogComponent', () => {
  let component: PriceListCatalogComponent;
  let fixture: ComponentFixture<PriceListCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
