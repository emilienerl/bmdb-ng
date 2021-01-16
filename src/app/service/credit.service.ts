import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit.class';

const URL = 'http://localhost:8080/credits';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  //service functions
  //getAll credits

  getAll(): Observable<Credit[]> {
    return this.http.get(URL + '/') as Observable<Credit[]>;
  }
  //get by ID
  getById(id): Observable<Credit> {
    return this.http.get(URL + '/' + id) as Observable<Credit>;
  }

  //create an credit and return a single credit
  create(credit: Credit): Observable<Credit> {
    return this.http.post(URL + '/', credit) as Observable<Credit>;
  }
  //update (edit) credit and return an instance of credit
  update(credit: Credit): Observable<Credit> {
    return this.http.put(URL + '/', credit) as Observable<Credit>;
  }
  //delete credit and return an instance of credit
  delete(id): Observable<Credit> {
    return this.http.delete(URL + '/' + id) as Observable<Credit>;
  }
}
