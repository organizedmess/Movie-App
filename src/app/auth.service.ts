import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  users = [
    {
      username: 'dhruv',
      password: '1234'
    }
  ]
  currUser ={
    username: '',
    password: ''
  }
  loggedIn = false;
  login(username: string, password: string) {
    for (let user of this.users) {
      if (user.username === username && user.password === password) {
        this.currUser = user;
        this.loggedIn = true;
        return true;
      }
    }
    return false;
  }

  logout() {
    this.currUser = {
      username: '',
      password: ''
    };
    
    this.loggedIn = false;
  }

  isAuthenticated() {
    return this.loggedIn;
  }
  
  newUser(username: string, password: string) {
    for (let user of this.users) {
      if (user.username === username) {
        return false;
      }
    }
    this.users.push({username, password});
    return true;
  }
}
