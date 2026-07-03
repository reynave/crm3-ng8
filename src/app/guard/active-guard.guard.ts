import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConfigService } from '../service/config.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private configService: ConfigService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.configService.token();

    // 1. Tidak ada token sama sekali -> belum login
    if (!token) {
      console.warn("YOU ARE NOT LOGGED IN!");
      this.router.navigate(['login/relogin']);
      return false;
    }

    // 2. Token ada, tapi varData null -> expired / gagal parse
    //    (loadToken() di service sudah set varData = null untuk kasus ini)
    if (!this.configService.varData) {
      console.warn("TOKEN EXPIRED OR INVALID");
      this.router.navigate(['login/relogin']);
      return false;
    }

    // 3. route.url[0] bisa undefined kalau path kosong / route container
    if (!route.url || route.url.length === 0 || !route.url[0]) {
      console.warn("Route tidak punya path segment, skip access check");
      return true; // atau false, tergantung kamu mau treat gimana - lihat catatan di bawah
    }

    // 4. Token valid, cek hak akses module
    const modulePath = route.url[0].path;
    if (this.configService.access_rules(modulePath)) {
      console.warn("ENABLE");
      return true;
    } else {
      console.warn("DISABLE");
      this.router.navigate(['/warning/access/', modulePath]);
      return false;
    } 
  }
}