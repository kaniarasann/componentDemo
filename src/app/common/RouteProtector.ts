import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class RouteProtector implements CanActivate {
  constructor(
    private route: Router
  ) {}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    let routeS = state;
    let isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      return true;
    }
    this.route.navigate(["/login"],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
