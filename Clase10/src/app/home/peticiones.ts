import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PeticionesService {

    constructor(private router: Router, private http: HttpClient ) {
      // this.cargarUno();
     }

    cargarAuto(auto)
    {
      let token = localStorage.getItem("token");
      const header = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'token': token
        })
      };

      console.log("estoy en agregar auto y voy a mandar el token" + token);
      this.http.post('http://192.168.2.26:3003/auto/',auto,header).subscribe(
        respuesta =>{
          console.log("resouesta auto" + JSON.stringify(respuesta));
        }
      );
    }

    traerTodosLosAutos()
    {
      let token = localStorage.getItem("token");
      const header = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'token': token
        })
      };

      console.log("estoy en verificar y voy a mandar" + token);
      return this.http.get('http://192.168.2.26:3003/auto/',header);
    }
}
