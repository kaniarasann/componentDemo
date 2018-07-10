import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent implements OnInit {

  isActive = true;
  emailAddress = 'kaniarasan.n@gmail.com';
  constructor() { }

  ngOnInit() {
  }

  clickEvent($event) {
    console.log($event);
  }

  clickEventFilter() {
    console.log('Enter Pressed');
  }
  templateVariable(email) {
    console.log(email.value);
  }
}
