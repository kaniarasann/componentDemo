import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './../home/home.component';
import { AutheAuthoComponent } from './../authe-autho/authe-autho.component';
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
      redirectTo: 'login'
    },
    {
      path: 'login',
      component: AutheAuthoComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    }
  ];
  static routeWithChild: Route[] = [
   {
     path: 'login',
     component: AutheAuthoComponent
   },
   {
     path: 'home',
     component: HomeComponent,
     children: [
      {path: 'userlist',  component: UserListComponent},
      {path: 'userdetail/:id/:name',  component: UserDetailComponent},
      {path: '',  component: UserListComponent},
     ]
   }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }, {
    path: '**',
    redirectTo: 'login'
  }
  ];
}
