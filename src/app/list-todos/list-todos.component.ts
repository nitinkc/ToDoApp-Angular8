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

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('username').subscribe(
      response => {
        this.todos = response;
        console.log(response);
      },
      error => {}
    )
  }

  /*
  todo = {
    id : 1,
    description : 'Learn to Dance'
  }*/


  //ToDo Array of Object
  /*todos = [
    {id: 1, description : 'activity 1'},
    {id: 2, description : 'activity 2'},
    {id: 3, description : 'activity 3'},
    {id: 4, description : 'activity 4'},
    {id: 5, description : 'activity 5'}

  ]*/

  /*
  todos =  [new Todo(1, 'activity 1 from Class', false, new Date ),
            new Todo(2, 'activity 2', false, new Date ),
            new Todo(3, 'activity 3', false, new Date ),
            new Todo(4, 'activity 4', false, new Date ),
            new Todo(5, 'activity 5', false, new Date )
          ] */

}
