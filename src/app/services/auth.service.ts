import { Injectable } from '@angular/core';
import Parse from 'parse';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Parse.User;
  //TODO: Umbauen mit NGRX State management
  $loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  authenticated: boolean = false;

  constructor() {
    Parse.User.enableUnsafeCurrentUser();
    let user = Parse.User.current();
    if(user){
      this.currentUser = user;
      this.$loggedIn.next(true);
      this.authenticated = true;
    }

  }

  register(username: string, password: string, email: string): void{

    let user = new Parse.User();

    user.setPassword(password);
    user.setEmail(email);
    user.setUsername(username);

    user.signUp().then((newUser) => {
      this.currentUser = newUser;
    }).catch((error) => {
      console.error("Unable to login User due to => " + error);
    });

  }

  login(username: string, password: string){
    Parse.User.logIn(username, password).then((user) => {
      this.currentUser = user;
    }).catch((error) => {
      console.error(error);
    });
  }

  logOut(){
    Parse.User.logOut().then(() => {
      this.currentUser = undefined;
      this.$loggedIn.next(false);
    });
  }

}
