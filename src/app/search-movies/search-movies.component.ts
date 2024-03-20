import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { state, style, transition, animate } from '@angular/animations';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrl: './search-movies.component.css',
  animations: [
    trigger('slide', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ]
})

export class SearchMoviesComponent{
  filteredStatus = '';
  movies: any[] = [];
  isLoading = true;
  loading: boolean = true;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private movieService: MovieService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    
      if(!this.authService.isAuthenticated()) {
        alert('You need to be logged in to access this page')
        this.router.navigate(['/'])
        return ;
      }

      this.movieService.GetMovies()
      .subscribe((movie: any) =>{
        this.movies = movie.movies;
        this.isLoading = false;
      })
      console.log(this.movies)
  }
  GotoDetils(i: number) {
    this.router.navigate(['/details', i]);
  }

}
