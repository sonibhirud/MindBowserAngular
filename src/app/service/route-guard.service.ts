import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authenticationSevice:AuthenticationService,
    private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.authenticationSevice.isManagerLoggedIn){
        console.log('hello ');
        return true;
      }
      else{
         this.router.navigate(['login']);
    console.log('hello erroe');

      }
     
      
    }
}
