import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClassComponent } from './customer-class.component';

describe('CustomerClassComponent', () => {
  let component: CustomerClassComponent;
  let fixture: ComponentFixture<CustomerClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
