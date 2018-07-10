import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCliComponent } from './course-cli.component';

describe('CourseCliComponent', () => {
  let component: CourseCliComponent;
  let fixture: ComponentFixture<CourseCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
