import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  baseUrl = environment.apiUrl;
  
  executeHelloWorldService(){
    console.log("from executeHelloWorldService" );
    return this.http.get<HelloWorldBean>(`${this.baseUrl}/hello-world`)
  }

  executeHelloWorldServicePathParam(name){
    console.log("from executeHelloWorldServicePathParam" );
    return this.http.get<HelloWorldBean>(`${this.baseUrl}/hello-world/${name}`)
  }
}
