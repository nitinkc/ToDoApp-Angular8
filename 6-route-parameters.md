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
 ngOnInit() {
    console.log(this.route.snapshot.params['name']);
  }
```