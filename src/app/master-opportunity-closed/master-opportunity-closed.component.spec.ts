import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOpportunityClosedComponent } from './master-opportunity-closed.component';

describe('MasterOpportunityClosedComponent', () => {
  let component: MasterOpportunityClosedComponent;
  let fixture: ComponentFixture<MasterOpportunityClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterOpportunityClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterOpportunityClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
