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
    if (this.configService.token()) {  
     // console.log(   this.configService.access_rules(route.url[0].path)  );  
      
     // console.warn("route.url[0].path : "+route.url[0].path);

      if(  this.configService.access_rules(route.url[0].path) ){
        console.warn("ENABLE");
        return true;
      }else{
        console.warn("DISABLE"); 
        this.router.navigate(['/warning/access/',route.url[0].path ]);
        return false;
      }
    

     

    } else {
      console.warn("YOUR ARE NOT LOGGED!");
      // not logged in so redirect to login page with the return url
     // this.router.navigate(['/login']);
      return true;
    }

  }

}
