# Routing

add the required routes into the app routing module.ts. The default is **

```ts
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome',component: WelcomeComponent},
  {path:'**',component: ErrorComponent}
];
```
Earlier applications used
  - Angular.giveMeRouter

Newer concept make use of :-
  - Dependency Injection

If you need something, just declare it as a dependency and Angular would take care of bringing it in.


Dependency injection is build in feature of Angular. If a dependency is needed, just declare it in the constructor

in login component ts

```ts
import { Router } from '@angular/router';

 constructor(private router: Router) { }
 ```

 **In TypeScript, if a variable is passed in as a constructor variable, it is by default available as a member variable**

Nsavigate acceps an array 

```ts
handleLogin(){
    if (this.username === 'username' && this.password == ''){
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
      console.log("Welcome to the Login Page");
    }else{
      this.invalidLogin = true;
      console.log("Incorrect credentials");
    }
  }
```
