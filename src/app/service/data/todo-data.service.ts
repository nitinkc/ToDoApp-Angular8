import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) {}

  baseUrl = environment.apiUrl;

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${this.baseUrl}/users/${username}/todos`);
  }

  retrieveTodo(username, id){
    return this.http.get(`${this.baseUrl}/users/${username}/todo/${id}`);
  }

  deleteATodo(username,id){
    //console.log('nitin ::::::::::: ' + `${id}` + `${username}`);
    return this.http.delete(`${this.baseUrl}/users/${username}/todos/${id}`);
  }

  updateTodo(username,id, todo){
    return this.http.put(
      `${this.baseUrl}/users/${username}/todo/${id}`,
      todo);
  }

  createTodo(username, todo){
    return this.http.post(
      `${this.baseUrl}/users/${username}/todos`,
      todo);
  }
}
