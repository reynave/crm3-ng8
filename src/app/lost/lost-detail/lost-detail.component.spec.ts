import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostDetailComponent } from './lost-detail.component';

describe('LostDetailComponent', () => {
  let component: LostDetailComponent;
  let fixture: ComponentFixture<LostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
