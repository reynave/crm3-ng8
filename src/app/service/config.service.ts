import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var api: any;
declare var login: any;


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  varKey: string = "mXTSxrEKSErYnZb33LyBus5RpVtGNfcgEBqxp5Unk5azj4ZgdWfhkfVDKJ3KSLFG7DtecSehXe7Q67NGFWGehU3ANexas3ZbrkfU";
  varToken: string;
  varHeaders: any = []; 
  rules:any;
  constructor(
    private http: HttpClient,
  ) {
    if ( this.getCookie('cmr3ng8Token') === null) {
      this.varToken = '';
    } else {
      this.varToken = this.getCookie('cmr3ng8Token'); 
    }

  }

  access_rules(module){
   this.rules =  JSON.parse(localStorage.getItem('crm3ng8Rules')); 
   return this.rules['result']['access_rules'][module]['access'];
  }

  access_right(){
    this.rules =  JSON.parse(localStorage.getItem('crm3ng8Rules')); 
    return this.rules['result']['access_rules'];
   }
  

  base_url() {
    return api;
  }

  headers() {
 
    return this.varHeaders = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Key': this.varKey,
      'Token': this.varToken,
    });
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
    
 

  errorToken(data) {
    if (data['error'] == 400) {
    //  window.location.href = "login";
    }

  }


  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

