import { RouteProtector } from './RouteProtector';
import { HomeComponent } from './../home/home.component';
import { AutheAuthoComponent } from './../authe-autho/authe-autho.component';
import { Route } from '@angular/router';
import { UserListComponent } from '../routing/user-list/user-list.component';
import { UserDetailComponent } from '../routing/user-detail/user-detail.component';

export const routeWithChild: Route[] = [
   {
     path: 'login',
     component: AutheAuthoComponent
   },
   {
     path: 'home',
     component: HomeComponent,
     canActivate:[RouteProtector],
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


