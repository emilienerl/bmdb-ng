import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title = "Movie Detail";
  movie : Movie = null;
  movieId: number = 0;
  //we need an ID first to recall the details not so much a new movie

  constructor(private movieSvc: MovieService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the ID from the URL
    //inside the current route look inside the params
    //route is injected into our component and we want to get access to these params
    this.route.params.subscribe(
      parms => {this.movieId = parms['id'];
      console.log(this.movieId);
    }
    );
    //get movie by ID
    this.movieSvc.getById(this.movieId).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie',this.movie);
      },
      err => {
        console.log(err);
      }
    );
  }
  delete() {
    //delete the movie to the database
    //subscribing to the service
    this.movieSvc.delete(this.movie.id).subscribe(
      resp => {
        this.movie = resp as Movie;
        //logging to the console to check that the movie has been deleted
        console.log('Movie deleted',this.movie);
        //forward to the movie list component to verify it deleted properly
        this.router.navigateByUrl("/movie-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
