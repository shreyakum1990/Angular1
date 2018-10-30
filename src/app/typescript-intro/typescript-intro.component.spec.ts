import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptIntroComponent } from './typescript-intro.component';

describe('TypescriptIntroComponent', () => {
  let component: TypescriptIntroComponent;
  let fixture: ComponentFixture<TypescriptIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
