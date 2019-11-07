import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeguardGuard implements CanActivate {

  constructor(private rutas : Router)
  {

  }

  canActivate()
  {

    let token = localStorage.getItem("token");
    if(token == null){
      this.rutas.navigate(['/']);
      return false;
    }
    return true;
  }


}
