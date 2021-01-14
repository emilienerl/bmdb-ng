import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title = "Movie Edit";
  movie: Movie = null;
  movieId: number = 0;
  //we need an ID first to recall the details not so much a new movie
  submitBtnTitle = "Save";

  constructor(private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    //get the ID from the URL
    //inside the current route look inside the params
    //route is injected into our component and we want to get access to these params
    this.route.params.subscribe(
      parms => {
        this.movieId = parms['id'];
        console.log(this.movieId);
      }
    );
    //get movie by ID
    this.movieSvc.getById(this.movieId).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie', this.movie);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    //save the movie to the database
    //subscribing to the service
    this.movieSvc.update(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        //logging to the console to check that the movie has been created
        console.log('Movie updated',this.movie);
        //forward to the movie list component
        this.router.navigateByUrl("/movie-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
