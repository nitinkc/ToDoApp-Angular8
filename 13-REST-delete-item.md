# Delete a specific todo from a user

in the view (list todo) add a button to delete

```html
<td>
  <button (click)="deleteTodo(todo.id)" class="btn btn-warning">Delete</button>
</td>
```

in todo data service add a delete http method]`1234567890

```ts
deleteATodo(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
```

in the list todo ts component, ensure the list gets refreshed, that means, the page refreshes so that the latest list is displayed. This makes another call to the DB so it can be further optimized

```ts
 deleteTodo(id){
    this.todoService.deleteATodo('username',id).subscribe(
      response =>{
        this.message = `Deleted Todo ${id} Successfully!!!`;
        this.refreshTodos();
      },
      error => {
      }
    )
  }
```


