import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
