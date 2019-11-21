import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminMenuGuard implements CanActivate {
  constructor(private rutas : Router)
  {

  }


  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    if('admin' == localStorage.getItem('tipoUsuario')){
      return true;
    }
    else{
      this.rutas.navigate(['/']);
      return false;
    }
  }
  
}
