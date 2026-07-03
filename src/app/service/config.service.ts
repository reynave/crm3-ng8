import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  varKey: string =
    "mXTSxrEKSErYnZb33LyBus5RpVtGNfcgEBqxp5Unk5azj4ZgdWfhkfVDKJ3KSLFG7DtecSehXe7Q67NGFWGehU3ANexas3ZbrkfU";
  varToken: any = "";
  varHeaders: any = [];
  rules: any;
  varData: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loadToken();

    window.addEventListener('storage', (event) => {
      if (event.key === 'tokenCrmCoId') {
        this.loadToken();
      }
    });
  }

  loadToken() {
    this.varToken = localStorage.getItem("tokenCrmCoId");

    if (this.varToken) {
      try {
        const token = this.parseJwt(this.varToken);
        this.varData = token;

        if (this.varData && this.varData.exp && Date.now() / 1000 > this.varData.exp) {
          throw new Error("Token expired");
        }
      } catch (e) {
        console.error("Invalid or expired token, redirecting to login...", e);
        this.varData = null;  
        localStorage.removeItem('tokenCrmCoId'); 
      }
    } else {
      console.error("Belum login atau session expired");
     
    }
  }

  logout() {
    localStorage.removeItem("tokenCrmCoId");
    this.varToken = "";
    this.varData = null;
    this.router.navigate(['login']);
  }

  parseJwt(token: string): any {
    if (!token) {
      return null;
    }

    const parts = token.split(".");

    if (parts.length !== 3) {
      throw new Error("Format token tidak valid");
    }

    const payload = parts[1];

    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");

    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "=",
    );

    const decoded = atob(padded);

    return JSON.parse(decoded);
  }

  // UNTUK NAVIGATOR & ACTIVE GUARD
  access_rules(module: any) {
    if (!this.varData || !this.varData["data"]) {
      console.warn("varData belum siap saat access_rules() dipanggil", this.varData);
      return null;
    }
    try {
      return this.varData["data"]["access_rules"]["result"]["access_rules"][module]["access"];
    } catch (e) {
      console.warn("Struktur access_rules tidak sesuai", e);
      return null;
    }
  }

  username() {
    if (!this.varData || !this.varData["data"]) {
      console.warn("varData belum siap saat username() dipanggil");
      return null;
    }
    try {
      return this.varData["data"]["access_rules"]["name"];
    } catch (e) {
      return null;
    }
  }

  // UNTUK ACTION BUTTON
  access_right() {
    if (!this.varData || !this.varData["data"]) {
      console.warn("varData belum siap saat access_right() dipanggil");
      return null;
    }
    try {
      return this.varData["data"]["access_rules"]["result"]["access_rules"];
    } catch (e) {
      return null;
    }
  }

  base_url() {
    return environment.api;
  }

  headers() {
    return (this.varHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Token": this.varToken,
    }));
  }

  key() {
    return this.varKey;
  }

  token() {
    return this.varToken;
  }

  id_user() {
    return this.varToken;
  }

  login() {
    return environment.login;
  }

  errorToken(data: any) {
    if (data["error"] == 400) {
      this.logout();
    }
  }

  getCookie(cname: any) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}