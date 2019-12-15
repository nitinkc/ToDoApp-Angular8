# Get All ToDo's for a user

create a new service for todo - ng generate service service/data/todoData

in ToDoDataService

```ts
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }
}
```

in the View (list todo Component)
```ts
import { Todo } from 'src/app/list-todos/list-todos.component';

constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('username').subscribe(
      response => {
        this.todos = response
      },
      error => {}
    )
  }
```

