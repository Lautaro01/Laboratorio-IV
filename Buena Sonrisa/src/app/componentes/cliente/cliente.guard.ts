import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanActivate {

  constructor(private ruta : Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      let tipo = localStorage.getItem("tipo");
      let token = localStorage.getItem("token");
      if(tipo == "cliente" && token != null)
      {
        return true;
      }
      else
      {
        this.ruta.navigate(["/"]);
        return false;
      }
  }
  
}
