import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
      ])
    ]),
    trigger('slide', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(2000)
      ])
    ]),
  ]
})
export class HomeComponent {

  CurrUser: any;
  constructor(private movieRef: MovieService, private router: Router, private authService: AuthService) {
    this.CurrUser = this.authService.currUser;
  }
  
  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      alert('Please login to continue');
      this.router.navigate(['']);
      return ;
    }
  }
  TopMovies = this.movieRef.TopMovies;
  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }  

}
