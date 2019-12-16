# Add a new todo Item

Create a new button in the list todo component and wire it up with a method in the ts file. On click of the button, the method shopuld call the todo componet's save and update methods. Pass in an id of -1 and modify the mthods in todo component in such a way that the network calls happen only when the id passed in is not = -1.


list-to-do

```html
<button (click)="addTodo()" class="btn btn-info">Add a new TODO</button>
```

list to do ts

```ts
addTodo(){
    console.log("Add to do called")
    this.router.navigate(['todos',-1])

  }
```

todo data service

```ts
createTodo(username, todo){
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`,
      todo);
  }
```

to-do component ts (notice the createTodo method call in the if statement)

```ts
 saveToDo(){
    if(this.id === -1){
      //Create a new Entrt. CALL POST METHOD
      this.toDoService.createTodo('username',this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }else{
      this.toDoService.updateTodo('username',this.id,this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }
  ```

  todo componet for the form submit. Take the form submission

  ```html
  <form (ngSubmit)="!todoForm.invalid && saveToDo()" #todoForm="ngForm" class="was-validated">
    ```