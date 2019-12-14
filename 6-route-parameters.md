# Route Parameters

Configure Route parameter in the app routes of the Welcome Component

```ts
const routes: Routes = [
  {path:'welcome/:name',component: WelcomeComponent},
];
```

Inject ActivatedRouter Dependency for Route parameter

```ts
  constructor(private route:ActivatedRoute) {
   }
```

Pull out the value from the params Map of the route.snapshot.params method

```ts
//Variable is used to interpolate the name into the view when the welsome page loads
name = ''

ngOnInit() {
    this.name = this.route.snapshot.params['name']
    console.log(this.name);
}
```

Fix the route navigation (add the route parameter in the app login component  handleLogin() method. Add the user name as the route parameter next to the routing page.

```ts
      this.router.navigate(['welcome',this.username]);
```

**Value from one page (login component) got passed to the other page (welcome component) via the route parameter (params map of the router.navigate)