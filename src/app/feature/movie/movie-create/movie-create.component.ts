import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  title = "Movie Create";
  //create a movie property, an instance of movie
  movie : Movie = new Movie();
  submitBtnTitle = "Create";

  //inject the service
  constructor(private movieSvc: MovieService, 
              private router: Router) { }

  ngOnInit(): void {
    //don't need to do anything here because we are just going to show a blank form
  }

  save() {
    //save the movie to the database
    //subscribing to the service
    this.movieSvc.create(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        //logging to the console to check that the movie has been created
        console.log('Movie created',this.movie);
        //forward to the movie list component
        this.router.navigateByUrl("/movie-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
