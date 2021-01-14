import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.class';

const URL = 'http://localhost:8080/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  //service functions
  //getAll movies
  getAll(): Observable<Movie[]> {
    return this.http.get(URL+'/') as Observable<Movie[]>;
  }
  //get by ID
  getById(id): Observable<Movie> {
    return this.http.get(URL+'/'+id) as Observable<Movie>;
  }
  //create movie and return a single movie
  create(movie: Movie): Observable<Movie> {
    return this.http.post(URL+'/', movie) as Observable<Movie>;
  }
   //update (edit) movie and return an instance of movie
   update(movie: Movie): Observable<Movie> {
    return this.http.put(URL+'/', movie) as Observable<Movie>;
  }
     //delete movie and return an instance of movie
     delete(id): Observable<Movie> {
      return this.http.delete(URL+'/'+id) as Observable<Movie>;
    }
  

}
