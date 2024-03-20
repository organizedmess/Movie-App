import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/home']);
      return ;
    }
  }
  onSubmit(form: NgForm) {
    const username = form.value.name;
    const password = form.value.password;

    if (this.authService.login(username, password)) 
    {
      this.router.navigate(['home']);
      console.log('Logged In');
    } 
    else {
      alert('Invalid Username or Password');
    }
  
  }
  NewAccount(){
    this.router.navigate(['signup']);
  }

}
