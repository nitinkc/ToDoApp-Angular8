# Update Rest Call for a Todo Item


# Bringing the data from the list todo view to the update view 
Create a todo component (another screen for creating or modifying a todo item);

ng generate component todo

Add the button for update in list todo.
Also, the description and data needs to be brought from the list todo page to this todo page for which 


```html
<td>
  <button (click)="updateTodo(todo.id)" class="btn btn-success">update</button>
</td>

<input type="text" [(ngModel)]="todo.description" class="form-control" id="uname" placeholder="Description" name="description" required>

<input type="date" 
      [ngModel]="todo.targerDate | date:'yyyy-mm-dd'" --PROPERTY BINDING
      (ngModelChange)="todo.targerDate = $event" -- EVENT BINDING
      class="form-control" id="pwd" placeholder="Target Date" name="targerDate" required>
```

Add the entry in the app routing module

```ts
  {path: 'todos/:id',component: TodoComponent, canActivate:[RouteGuardService]},
```

Inject the Router module in the list component to get redirected into the todos component

```ts
//Navigate to a new page to update the todo item
updateTodo(id){
  this.router.navigate(['todos',id])
}
```

in the todo component

```ts
export class TodoComponent implements OnInit {

  id:number;
  todo:Todo;

  constructor(
    private toDoService:TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //Initialize this to be the place holder, else the delay in an asynchronous call would give null pointer error
    this.todo = new Todo(1,'',new Date(),true);

    this.toDoService.retrieveTodo('username',this.id)
    .subscribe(
      data => {this.todo = <Todo> data
      console.log(this.todo.targetDate)
      }
    )
  }
}
```

# Saving the modified data

The CORS policy error force to have CorsConfiguration implemented on the server side


```html
<td>
  <button (click)="updateTodo(todo.id)" class="btn btn-success">update</button>
</td>
```

Handling the onClick event in the todo component

```ts
saveToDo(){
    this.toDoService.updateTodo('username',this.id,this.todo)
      .subscribe(
        data => {
          console.log(data)
        }
      )
  }
```

to-do data service

```ts
updateTodo(username,id, todo){
    return this.http.put(
      `http://localhost:8080/users/${username}/todo/${id}`,
      todo);
  }
```




