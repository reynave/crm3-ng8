import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadConverdComponent } from './lead-converd.component';

describe('LeadConverdComponent', () => {
  let component: LeadConverdComponent;
  let fixture: ComponentFixture<LeadConverdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadConverdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadConverdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
