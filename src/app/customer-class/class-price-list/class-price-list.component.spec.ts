import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPriceListComponent } from './class-price-list.component';

describe('ClassPriceListComponent', () => {
  let component: ClassPriceListComponent;
  let fixture: ComponentFixture<ClassPriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassPriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
