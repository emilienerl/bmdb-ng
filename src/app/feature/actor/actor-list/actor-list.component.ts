import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  [x: string]: any;
  title="Actor List";
  actors: Actor[] = [];

  constructor(private actorSvc: ActorService, 
              private sysSvc: SystemService ) { }


  ngOnInit(): void {
     // if coming from login we should have an authenticated user inside sysSvc
     console.log('actor list - loggedInUser?', this.sysSvc.loggedInUser);
    //populate list of actors
    this.actorSvc.getAll().subscribe(
      resp => {
        this.actors = resp as Actor[];
        console.log('Actors',this.actors);
      },
      err => {
        console.log(err);
      }
    );
  }

}