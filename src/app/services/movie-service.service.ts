import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieServiceService {
  API_KEY: string;
  CURRENT_MOVIES_ENDPOINT: string;
  POPULAR_MOVIES_ENDPOINT: string;
  SEARCH_MOVIES_ENDPOINT: string;

  constructor(public _jsonp: Jsonp) {
    this.CURRENT_MOVIES_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-05-01&api_key=';
    this.POPULAR_MOVIES_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=';
    this.SEARCH_MOVIES_ENDPOINT = 'https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='; 
    this.API_KEY = '5662680fe6c82bacf64897d9b1603156';
  }

  getCurrentMovies() {
    return this._jsonp
      .get(`${this.CURRENT_MOVIES_ENDPOINT}${this.API_KEY}`)
      .map(res => res.json());
  }

  getPopularMovies() {
    return this._jsonp
      .get(`${this.POPULAR_MOVIES_ENDPOINT}${this.API_KEY}`)
      .map(res => res.json());
  }

  searchMovies(searchStr: string) {
    return this._jsonp.get(`${this.SEARCH_MOVIES_ENDPOINT}${searchStr}&sort_by=popularity.desc&api_key=${this.API_KEY}`)
    .map(res => res.json());
  }

  getMovie(id: string) {
    return this._jsonp
      .get(`https://api.themoviedb.org/3/movie/${id}?callback=JSONP_CALLBACK&api_key=${this.API_KEY}`)
      .map(res => res.json()); 
  }
}
