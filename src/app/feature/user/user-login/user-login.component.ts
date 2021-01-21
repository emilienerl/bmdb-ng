import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title: string = 'Login';
  message: string = '';
  user: User = new User();
  // username: string = '';
  // password: string = '';

  //inject the user service
  constructor(private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //login method
  login() {
    //call login service using username and password
    this.userSvc.login(this.user).subscribe(
      //expecting a service method to get called and expecting a response
      resp => {
        if (resp == null) {
          this.message = "Invalid username / password combo.";
        }
        else {
          this.user = resp as User;
          console.log("Successful login!", this.user);
          this.sysSvc.loggedInUser = this.user;
          this.router.navigateByUrl('/movie-list');
        }
      },
      err => {
        console.log("User login error!", err);
        this.message = "Error during login"
      }
    );

  }

}
