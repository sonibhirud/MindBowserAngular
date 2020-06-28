import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {
  email = 'bhirud@gmail.com'
  password = '123456'
  errorMsg='Invalid Credentials'
  invalidLogin  = false

  constructor(private router:Router,
    private authenticationService:AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  managerLogin()
  {
   
    if(this.authenticationService.authenticate(this.email,this.password))
    {
      console.log("hello")
  this.invalidLogin = true;
  this.router.navigate(['home'])
      
    }
    else{
      this.invalidLogin = false;
    }

  }

}
