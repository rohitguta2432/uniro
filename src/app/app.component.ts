import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'uniro';

constructor(private auth:AuthService){}

ngOnInit(){}

loginUser(event){
  event.preventDefault()
  const target=event.target

  const username=target.querySelector('#username').value;
  const password=target.querySelector('#password').value;

  console.log(username,password)
  
  this.auth.getUserDetails(username,password);

  } 
}
