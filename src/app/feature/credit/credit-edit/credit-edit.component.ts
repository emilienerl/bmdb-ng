import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {
  title = "Credit Edit";
  credit : Credit = null;
  submitBtnTitle = "Edit";
  actors: Actor[] = [];
  movies: Movie[] = [];
  creditId: number = 0;

   //inject the service
  constructor(private creditSvc: CreditService, 
    private actorSvc: ActorService,
    private movieSvc: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //1. get id from url
    this.route.params.subscribe(
      parms => {this.creditId = parms['id'];
    }
    );

    //2. get the credit by id
    this.creditSvc.getById(this.creditId).subscribe(
      resp => {
        this.credit = resp as Credit;
      },
      err => {
        console.log(err);
      }
    );

    //3. get list of actors

    this.actorSvc.getAll().subscribe(
      resp => {
        this.actors = resp as Actor[];
      },
      err => {
        console.log(err);
      }
    );

  //4. get list of movies

    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
      },
      err => {
        console.log(err);
      }
    );

  }

  save() {
    
    this.creditSvc.create(this.credit).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit created',this.credit);
       this.router.navigateByUrl("/credit-list");
      },
      err => {
        console.log(err);
      }
    );
  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }

}
