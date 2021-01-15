import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title = "Actor Edit";
  actor: Actor = null;
  actorId: number = 0;
  //we need an ID first to recall the details not so much a new actor
  submitBtnTitle = "Save";

  constructor(private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    //get the ID from the URL
    //inside the current route look inside the params
    //route is injected into our component and we want to get access to these params
    this.route.params.subscribe(
      parms => {
        this.actorId = parms['id'];
        console.log(this.actorId);
      }
    );
    //get movie by ID
    this.actorSvc.getById(this.actorId).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor', this.actor);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    //save the actor to the database
    //subscribing to the service
    this.actorSvc.update(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        //logging to the console to check that the actor has been created
        console.log('Actor updated',this.actor);
        //forward to the movie list component
        this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}