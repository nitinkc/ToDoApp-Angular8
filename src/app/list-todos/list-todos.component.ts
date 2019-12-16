import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isCompleted: boolean
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message:String;

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('username').subscribe(
      response => {
        this.todos = response;
        //console.log(response);
      },
      error => {}
    )
  }

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

  //Navigate to a new page to update the todo item
  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    console.log("Add to do called")
    this.router.navigate(['todos',-1])

  }
}
