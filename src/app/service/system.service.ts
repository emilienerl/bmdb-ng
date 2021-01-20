import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  //property loggedInUser needs to be set to null
  loggedInUser: User = null;

  //inject into the router
  constructor(private router: Router) { }

  //not applicable for bmdb as there is no 'admin' property on user
  //function isAdmin that uses a ternary operator, we want to know if the login user is null or does the user have a login
  //this returns true or false for if a user is a Admin, so if the login user is null return false, otherwise if it is a login user return true
  //isAdmin(): boolean {
  //  return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
  //}

  checkLogin(): void {
    //if user is not logged in, send to login page
    //comment out this code for testing purposes
    if (this.loggedInUser == null) {
      console.log("User is not logged in... redirecting to login.");
      this.router.navigateByUrl("/user-login");
    }
  }

}
