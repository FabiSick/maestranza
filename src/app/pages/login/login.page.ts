import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'operador', password: 'op123', role: 'operador' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    const foundUser = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
