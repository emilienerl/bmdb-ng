import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title = "Actor Create";
  //create a actor property, an instance of actor
  actor : Actor = new Actor();
  submitBtnTitle = "Create";

  //inject the service
  constructor(private actorSvc: ActorService, 
              private router: Router) { }

  ngOnInit(): void {
    //don't need to do anything here because we are just going to show a blank form
  }

  save() {
    //save the movie to the database
    //subscribing to the service
    this.actorSvc.create(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        //logging to the console to check that the movie has been created
        console.log('Actor created',this.actor);
       //forward to the actor list component
       this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
