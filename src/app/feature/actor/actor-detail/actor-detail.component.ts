import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  title = "Actor Detail";
  actor : Actor = null;
  actorId: number = 0;
  //we need an ID first to recall the details not so much a new movie

  constructor(private actorSvc: ActorService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the ID from the URL
    //inside the current route look inside the params
    //route is injected into our component and we want to get access to these params
    this.route.params.subscribe(
      parms => {this.actorId = parms['id'];
      console.log(this.actorId);
    }
    );
    //get actor by ID
    this.actorSvc.getById(this.actorId).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor',this.actor);
      },
      err => {
        console.log(err);
      }
    );
  }
  delete() {
    //delete the actor to the database
    //subscribing to the service
    this.actorSvc.delete(this.actor.id).subscribe(
      resp => {
        this.actor = resp as Actor;
        //logging to the console to check that the actor has been deleted
        console.log('Actor deleted',this.actor);
        //forward to the actor list component to verify it deleted properly
        this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
