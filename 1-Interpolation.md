# {{INTERPOLATION}}

Passing the values from component to the view

Passing the values from the class (component.ts) to the html page

### login.component.ts - the interpolated values are being read
```ts
//Hardcoded values 
  username = 'username'
  password = ''
```

### login.component.html - the interpolated values are being read

```typescript
<label> User Name : </label> <input type="text" name="username" value="{{username}}">
<br>
<label> Password : </label> <input type="text" name="password" value="{{password}}">
```