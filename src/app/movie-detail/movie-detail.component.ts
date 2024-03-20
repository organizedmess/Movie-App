import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movies: any = {};
  index: number = -1;

  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    
    this.router.params.subscribe((params: Params) => {
      this.index = +params['id'];
    });
    this.movies = this.movieService.movies[this.index];
    console.log(this.movies);
  }
}
