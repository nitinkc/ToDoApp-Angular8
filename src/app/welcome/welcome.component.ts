import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = "Welcome to the Login Page"
  //Variable is used to interpolate the name into the view when the welsome page loads
  name = ''

  // Inject ActivatedRouter Dependency for Route parameter
  constructor(private route:ActivatedRoute) {
   }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
    console.log(this.name);
  }
}
