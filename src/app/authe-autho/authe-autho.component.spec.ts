import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheAuthoComponent } from './authe-autho.component';

describe('AutheAuthoComponent', () => {
  let component: AutheAuthoComponent;
  let fixture: ComponentFixture<AutheAuthoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutheAuthoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutheAuthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
