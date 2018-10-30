import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWorkComponent } from './angular-work.component';

describe('AngularWorkComponent', () => {
  let component: AngularWorkComponent;
  let fixture: ComponentFixture<AngularWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
