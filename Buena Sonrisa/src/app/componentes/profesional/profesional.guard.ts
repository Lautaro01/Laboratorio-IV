import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalGuard implements CanActivate {

  constructor(private ruta : Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      let tipo = localStorage.getItem("tipo");
      let token = localStorage.getItem("token");
      if(tipo == "profesional" && token != null)
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