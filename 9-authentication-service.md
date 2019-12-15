# Use a service in another component via Dependency Injection.

ng generate service service/hardcodedAuthentication


Create a authenticate method in the new service component

use the created method in the login component via dependency injection (declare the service component in the constructor and usr it like below) in the event handler method of login button.

```ts
handleLogin(){
    ..........
    ...........
    
    if(this.hardcodedAuthentication.authenticate(this.username,this.password)){ 
    //logic
}
}

```


# Session Storage

Use the Web Browsers sessionStorage object to keep the map of key-value pair to store the session related material.

in the authenticator service
```ts
authenticate(username,password){
    if (username === 'username' && password === ''){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
  }
  return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return!(user === null);
  }
```

in the login component

```ts
private isUserLoggedIn: boolean
  constructor(private authenticator: HardcodedAuthenticationService) { }

  ngOnInit() {
    if(this.authenticator.isUserLoggedIn){
      this.isUserLoggedIn == true;
    }else{
      this.isUserLoggedIn == false;
    }
```

Use  the isUSer variable on the view with *ngIf

if USer is logged in show Logout link and hide login link
```html
<li><a *ngIf="!isUserLoggedIn" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
<li><a *ngIf="isUserLoggedIn" href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
```

The above approach fails, due to the fact that the init method of the menu component of is called in the beginning and the values is set and never refreshed. To avoid it, use the service directly on the html page


in menu component
```ts
  constructor(private authenticator: HardcodedAuthenticationService) { }
```

in the menu html
```html
li><a *ngIf="!authenticator.isUserLoggedIn()" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
<li><a *ngIf="authenticator.isUserLoggedIn()" href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
```

