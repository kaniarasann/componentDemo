import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public id: number;
  public name: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // if id does not change
    this.id = +this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    // if this id changes
    // this.route.paramMap.subscribe(param => {
    //   this.id = +param.get('id');
    // });
  }

}
