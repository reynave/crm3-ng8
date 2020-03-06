import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLeadSourceComponent } from './master-lead-source.component';

describe('MasterLeadSourceComponent', () => {
  let component: MasterLeadSourceComponent;
  let fixture: ComponentFixture<MasterLeadSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLeadSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLeadSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
