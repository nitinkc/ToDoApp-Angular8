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