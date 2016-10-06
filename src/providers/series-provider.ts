import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the SeriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SeriesProvider {

  constructor(public http: Http) {
    console.log('Hello SeriesProvider Provider');
  }

  search(query:string) {
    var url = "https://api.themoviedb.org/3/search/tv?api_key=82fa8e06b34b7de0d1d3c8adcf144c97&query=";

    return this.http.get(url + query)
             .map(res => res.json()) //arrow function , idem ao de cima
             .toPromise();
  }
}
