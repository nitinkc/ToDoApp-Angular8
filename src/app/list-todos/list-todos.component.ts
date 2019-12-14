import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }

  //ToDo Array of Object
  todos = [
    {id: 1, description : 'activity 1'},
    {id: 2, description : 'activity 2'},
    {id: 3, description : 'activity 3'},
    {id: 4, description : 'activity 4'},
    {id: 5, description : 'activity 5'}

  ]
  constructor() { }

  ngOnInit() {
  }

}
