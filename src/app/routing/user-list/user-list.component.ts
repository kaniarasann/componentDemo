import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public data: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(x => console.log(x.get('page')));
    this.data.push({
      id: 1,
      name: 'kaniarasan'
    });
    this.data.push({
      id: 2,
      name: 'Gopalakrishnan'
    });
  }

  navigateToDetailPage(id: number, name: string): void {
   this.router.navigate(['/home/userdetail', id, name]);
  }
}
