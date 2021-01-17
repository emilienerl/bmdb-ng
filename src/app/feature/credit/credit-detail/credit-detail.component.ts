import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title = "Credit Detail";
  credit : Credit = null;
  actor: Actor;
  movie: Movie;
  creditId: number = 0;


  constructor(private creditSvc: CreditService, 
    private actorSvc: ActorService,
    private movieSvc: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

              ngOnInit(): void {

                this.route.params.subscribe(
                  parms => {this.creditId = parms['id'];
                  console.log(this.creditId);
                }
                );
                //get movie by ID
                this.creditSvc.getById(this.creditId).subscribe(
                  resp => {
                    this.credit = resp as Credit;
                    console.log('Credit',this.credit);
                  },
                  err => {
                    console.log(err);
                  }
                );
              }
              delete() {

                this.creditSvc.delete(this.credit.id).subscribe(
                  resp => {
                    this.credit = resp as Credit;
                    //logging to the console to check that the movie has been deleted
                    console.log('Credit deleted',this.credit);
                    //forward to the movie list component to verify it deleted properly
                    this.router.navigateByUrl("/credit-list");
                  },
                  err => {
                    console.log(err);
                  }
                );
              }
            
            }
            