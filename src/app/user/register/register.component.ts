import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(24),
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm
    ),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);

  showAlert = false;
  alertMessage = 'Please wait, while we create your account!';
  alertColor = 'cyan';

  registerForm = new FormGroup({
    name: this.name,
    age: this.age,
    phoneNumber: this.phoneNumber,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
  });

  register() {
    this.showAlert = true;
    this.alertMessage = 'Please wait, while we create your account!';
    this.alertColor = 'cyan';
  }
}
