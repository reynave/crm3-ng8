import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    // kalau sudah ada token, langsung redirect ke halaman utama
    const token = localStorage.getItem('tokenCrmCoId');
     if (token) {
      console.log("Token OK",token)
      this.router.navigate(['/dashboard']);
     }
  }

  onSubmit() {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Username dan password wajib diisi.';
      return;
    }

    this.isLoading = true;

    const payload = {
      username: this.username,
      password: this.password
    };

    this.http.post(`${environment.api}auth/login`, payload)
      .subscribe(
        (res: any) => {
          console.log(res)
          this.isLoading = false;

          if (res && res.token) {
            localStorage.setItem('tokenCrmCoId', res.token);
         //   localStorage.setItem('user', JSON.stringify(res.user || {}));
           // this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Login gagal, response tidak valid.';
          }
        },
        (err) => {
          console.log(err)
          this.isLoading = false;

          if (err.status === 401 || err.status === 400) {
            this.errorMessage = 'Username atau password salah.';
          } else {
            this.errorMessage = 'Terjadi kesalahan pada server. Coba lagi nanti.';
          }
        }
      );
  }

}
