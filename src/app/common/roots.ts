import { Route } from '@angular/router';
import { UserListComponent } from '../routing/user-list/user-list.component';
import { UserDetailComponent } from '../routing/user-detail/user-detail.component';

export class Routes {
  static route: Route[] = [
    {
      path: 'userlist',
      component: UserListComponent
    },
    {
      path: 'userdetail/:id/:name',
      component: UserDetailComponent
    },
    {
      path: '**',
      redirectTo: 'userlist'
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'userlist'
    }
  ];
}
