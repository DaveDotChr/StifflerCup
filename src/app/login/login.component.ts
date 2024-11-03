import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatButtonModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService: AuthService = inject(AuthService)

  username: string;
  email: string;
  password: string;
  showLogin: boolean = true;


  registerUser(){
    this.authService.register(this.username, this.password, this.email);
  }

  loginUser(){
    this.authService.login(this.username, this.password);
  }

}
