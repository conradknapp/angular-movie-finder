import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private _movieServiceService: MovieServiceService
  ) {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this._movieServiceService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      })
    })
   }

  ngOnInit() {
  }

}
