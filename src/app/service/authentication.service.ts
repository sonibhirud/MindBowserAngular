import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  authenticate(email,password)
  {
    if(email === "bhirud@gmail.com" && password === "123456")
    {
      sessionStorage.setItem('authenticatedUser',email);
      return true;
    }
    return false;
  }

  isManagerLoggedIn()
  {
    let manager1=sessionStorage.getItem('authenticatedUser');
    return !(manager1==null);
  }

  logout()
  {
    sessionStorage.removeItem('authenticatedUser');
  }

}
