import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  password = '';
  errorMessage = '';
  apiUrl = 'http://localhost:3000/api/usuarios/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async login() {
    try {
      const user = await this.http.post<any>(this.apiUrl, {
        email: this.email,
        contraseña: this.password
      }).toPromise();

      localStorage.setItem('usuario', JSON.stringify(user));

      const rol = user.rol?.toLowerCase() ?? '';

      if (rol === 'admin') {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate([`/home-${rol}`]);
      }

    } catch {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
