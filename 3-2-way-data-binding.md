# [(Banana in the Box)] Two way Data binding

Between Class (ts) and Template


### login.component.html - the interpolated values are being read

```typescript
<button (click) = handleLogin()>Login</button>
```

### login.component.ts - the interpolated values are being read
```ts
handleLogin(){
    console.log(this.username);
  }

```

