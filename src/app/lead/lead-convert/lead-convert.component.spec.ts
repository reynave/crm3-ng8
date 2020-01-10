import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadConvertComponent } from './lead-convert.component';

describe('LeadConvertComponent', () => {
  let component: LeadConvertComponent;
  let fixture: ComponentFixture<LeadConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
