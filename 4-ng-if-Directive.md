# *ngIf='value' Directive 

### In html

ngIf needs a boolean variable from the .ts class 
```html
<div>
    <small *ngIf='invalidLogin'>{{errorMessage}}</small>
</div>
```

### In component.ts

```ts
handleLogin(){
  //Hardcoded values 
  username = 'username'
  password = ''
  errorMessage = "Invalid Credentials!!"
  invalidLogin = false;

  if (this.username === 'username' && this.password == ''){
    this.invalidLogin = true;
  }
```
