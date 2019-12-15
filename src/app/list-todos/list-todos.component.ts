import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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
    private todoService:TodoDataService
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

}
