import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-movies',
  providers: [MovieServiceService],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[];
  popularList: Array<Object>;
  currentList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(public _movieServiceService: MovieServiceService) {
  }
  
  async ngOnInit() {
    const p1 = await this._movieServiceService
        .getPopularMovies();

    const p2 = await this._movieServiceService
        .getCurrentMovies();

    const [popular, current] = await Promise.all([p1, p2]);
    
    popular.subscribe(movies => {
      this.popularList = movies.results;
    });

    current.subscribe(movies => {
      this.currentList = movies.results;
    });
  }

  searchMovies() {
    console.log(this.searchStr);
    this._movieServiceService.searchMovies(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.results;
      })
  }
}
