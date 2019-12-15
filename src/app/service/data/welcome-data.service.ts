import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:String){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldService(){
    console.log("from executeHelloWorldService" );
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world")
  }

  executeHelloWorldServicePathParam(name){
    console.log("from executeHelloWorldServicePathParam" );
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`)
  }
}
