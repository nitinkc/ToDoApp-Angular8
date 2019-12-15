import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = "Welcome to the Login Page";
  welcomeMessageFromServer: String;
  //Variable is used to interpolate the name into the view when the welsome page loads
  name = ''

  // Inject ActivatedRouter Dependency for Route parameter
  constructor(
    private route:ActivatedRoute,
    private welcomeService:WelcomeDataService
    ) {
   }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeFromServer(){
    this.welcomeService.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("The execution continues... asynchronously")
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromServer = response.message;
    //console.log(response.message)
  }

  handleErrorResponse(error){
    this.welcomeMessageFromServer = error.error.message;
  }

}
