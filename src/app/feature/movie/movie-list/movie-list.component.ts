import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { SystemService } from 'src/app/service/system.service';
import { Movie } from '../../../model/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title="Movie List";
  movies: Movie[] = [];
  //column you want to sort by
  sortCriteria: string = "id";
  //ascending order
  sortOrder: string = "asc";
  //style applying to the header
  colClasses = "btn btn-link font-weight-bold";

  constructor(private movieSvc: MovieService,
              private sysSvc: SystemService) { }


  ngOnInit(): void {
    // if coming from login we should have an authenticated user inside sysSvc
    console.log('movie list - loggedInUser?', this.sysSvc.loggedInUser);
    //populate list of movies
    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
        console.log('Movies',this.movies);
      },
      err => {
        console.log(err);
      }
    );
  }
  //expecting a column name to be passed; if the column you want to sort equals what is in sort criteria 
  sortBy(column: string): void {
    console.log("movie list sortBy called")
    if(column == this.sortCriteria){
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

}
