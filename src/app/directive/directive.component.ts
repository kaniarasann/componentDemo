import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showDiv = true;
  viewMode='3';
  courses = ['a1','b1','c1','d1'];
  trackParam(index,course){
  return course?course:undefined;
  }

  obj = {
    name:undefined
  }
  
}
