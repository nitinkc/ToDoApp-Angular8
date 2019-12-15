import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate {

  constructor(
    private authenticator:HardcodedAuthenticationService,
    private router:Router)
    { }

    canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.authenticator.isUserLoggedIn()){
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }
}