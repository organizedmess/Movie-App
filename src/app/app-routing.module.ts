import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchMoviesComponent},
  {path: 'details/:id', component: MovieDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
