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
  varData: any = [];
  constructor(
    private http: HttpClient,
    private router : Router,
  ) {
    this.varToken = localStorage.getItem("tokenCrmCoId");

    if (this.varToken) {
      try {
        const token = this.parseJwt(this.varToken);
        console.log("varData:", token);

        this.varData =token;
        // optional: cek token sudah expired atau belum
        if (this.varData.exp && Date.now() / 1000 > this.varData.exp) {
          throw new Error("Token expired");
        }
      } catch (e) {
        console.error("Invalid or expired token, redirecting to login...", e);
        // localStorage.removeItem('tokenCrmCoId');
        // window.location.href = environment.login;
        this.router.navigate(['login/relogin']).then(() => {
          localStorage.removeItem('tokenCrmCoId');
        });
      }
    } else {
      // Belum login atau session expired
      console.log("Belum login atau session expired");
      // window.location.href = environment.login;
    }
  }

// pisahkan logic ke method sendiri biar bisa dipanggil ulang
  loadToken() {
    this.varToken = localStorage.getItem("tokenCrmCoId");

    if (this.varToken) {
      try {
        const token = this.parseJwt(this.varToken);
        this.varData = token;

        if (this.varData.exp && Date.now() / 1000 > this.varData.exp) {
          throw new Error("Token expired");
        }
      } catch (e) {
        console.error("Invalid or expired token, redirecting to login...", e);
        this.router.navigate(['login/relogin']).then(() => {
          localStorage.removeItem('tokenCrmCoId');
        });
      }
    } else {
      console.log("Belum login atau session expired");
    }
  }
logout() {
  localStorage.removeItem("tokenCrmCoId");
  this.varToken = "";
  this.varData = [];
  this.router.navigate(['login']); // atau route login kamu
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

    // base64url -> base64 standar
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");

    // padding kalau perlu
    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "=",
    );

    const decoded = atob(padded);

    return JSON.parse(decoded);
  }

  // UNTUK NAVIGATOR & ACTIVE GUARD
  access_rules(module: any) {
    console.log(this.varData)
    return this.varData["data"]["access_rules"]['result']['access_rules'][module]["access"];
  }

  username() {
 
    return this.varData["data"]['access_rules']['name'];
  }

  // UNTUK ACTION BUTTON
  access_right() {
    return this.varData["data"]["access_rules"]['result']['access_rules'];
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
      //  window.location.href = "login";
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
