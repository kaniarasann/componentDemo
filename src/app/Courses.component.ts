import { CourseService } from './course.service';
import {Component} from '@angular/core';

@Component({
  selector: 'course',
  template: `<h1> {{title}} </h1>
  <button class="btn btn-primaty">Save</button>
            <img [src]="imgUrl">
            <ul>
            <li *ngFor="let item of courses">
            {{item}}
            </li>
            </ul>'
            '`
})
export class CoursesComponent {
 title = 'THis id from title';
 courses = [];
 imgUrl = 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg';
 constructor(service: CourseService) {
  this.courses = service.getCourse();
 }
}
