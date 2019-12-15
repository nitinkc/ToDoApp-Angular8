# Route Guard to not allow any page access without proper authentication

ng generate service service/routeGuard

implements CanActivate from the angular/router package

if true then allow the page view else route to login page/error page etc.


```ts
export class RouteGuardService implements CanActivate {

  
  constructor(
    private authenticator:HardcodedAuthenticationService,
    private router:Router)
    { }

    canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.authenticator.isUserLoggedIn){
        return true;
      }

      this.router.navigate(['login']);
      return false;
    }
}
```


# Modify the Router link

```ts
  {path:'welcome/:name',component: WelcomeComponent, canActivate:[RouteGuardService]},

```
