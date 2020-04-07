import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCurrencyComponent } from './master-currency.component';

describe('MasterCurrencyComponent', () => {
  let component: MasterCurrencyComponent;
  let fixture: ComponentFixture<MasterCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
