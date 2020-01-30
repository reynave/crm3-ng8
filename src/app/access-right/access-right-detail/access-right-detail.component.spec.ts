import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRightDetailComponent } from './access-right-detail.component';

describe('AccessRightDetailComponent', () => {
  let component: AccessRightDetailComponent;
  let fixture: ComponentFixture<AccessRightDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRightDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
