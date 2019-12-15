# Hello World from Server using HttpClientModule

Create a service (data service), that would call the backend API (to bring in the data from the server)

ng generate service service/data/welcomeData

### Hello World Data Service 

In order to avoid freezing the web browser, asynchronous calls via Observables are made. Observanle interface to perform most of the asynchronous operations.

In Welcome data service

```ts
//Defining the structure of the response
export class HelloWorldBean{
  constructor(public message:String){}
}

constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldService(){
    //console.log("from executeHelloWorldService" );
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world/nitin")

  }
```

In Welcome component where the message is to be intercepted
Notice the use of Subscribe, takes a Lambda that executes asynchronously after receivimg the response from the server

Also notice that response is not aware of the variables getting returned from the server. To do that define a class, that can be used as a placeholder for the variables that comes after the servers response

```ts
getWelcomeFromServer(){
    this.welcomeService.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    console.log("The execution continues... asynchronously")
  }

   handleSuccessfulResponse(response){
    this.welcomeMessageFromServer = response.message;
  }
```

welcome component html

```html
 <div class="col-sm-9 col-md-6 bg-warning">
    <p> Get Hello Message from the Server </p>
    <button class="btn btn-primary" (click)="getWelcomeFromServer()">Get Welcome From Server</button>
    <p *ngIf="welcomeMessageFromServer" class="text-danger">
      <b> {{welcomeMessageFromServer}} </b>
    </p>
  </div>
```

## Error Handling

Add the error call back in the welcome component and handle the error rersponse accordingly

```ts
 getWelcomeFromServer(){
    this.welcomeService.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

 handleErrorResponse(error){
    this.welcomeMessageFromServer = error.error.message;
  }
```

### Path Parameter

In the data Service

use back tick for the URL
```ts
executeHelloWorldServicePathParam(name){
    console.log("from executeHelloWorldServicePathParam" );
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`)
  }

```

In the welcome component

```ts
getWelcomeFromServerWithParam(){
    this.welcomeService.executeHelloWorldServicePathParam(this.name).subscribe(
      response => this.handleSuccessfulResponseWithParam(response),
      error => this.handleErrorResponsewithParam(error)
    );

    console.log("The execution continues... asynchronously")
  }

  handleSuccessfulResponseWithParam(response){
    this.welcomeMessageFromServerWithParam = response.message;
  }
  handleErrorResponsewithParam(error){
    this.welcomeMessageFromServerWithParam = error.error.message;
  }
```


