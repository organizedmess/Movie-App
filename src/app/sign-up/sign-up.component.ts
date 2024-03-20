import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    const username = form.value.name;
    const password = form.value.password;
    if (this.authService.newUser(username, password))
    {
      let ele = document.querySelector('.ack') as HTMLElement;
      ele?.style.setProperty('display', 'block');
      console.log('Account Made');
    }
    else 
    {
      alert('Account already exists');
    }
  }
  

}
