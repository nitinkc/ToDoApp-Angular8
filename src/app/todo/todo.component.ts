import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
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

  saveToDo(){
    this.toDoService.updateTodo('username',this.id,this.todo)
      .subscribe(
        data => {
          console.log(data)
        }
      )
  }
}
