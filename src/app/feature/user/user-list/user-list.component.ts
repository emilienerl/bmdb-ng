import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = "User List";
  users: User[] = [];

  constructor(private userSvc: UserService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
     // if coming from login we should have an authenticated user inside sysSvc
     console.log('user list - loggedInUser?', this.sysSvc.loggedInUser);
    // populate list of users
    this.userSvc.getAll().subscribe(
      resp => {
      this.users = resp as User[];
      console.log('User', this.users);
    },
    err => {
      console.log(err);
    }
    )
  }

}