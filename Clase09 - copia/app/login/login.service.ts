import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService{

    constructor(private router: Router, private http: HttpClient ) { }

    cliente = { cliente : { user : '', pass : ''}};

    ingresar(usuario : string, clave : string)
    {
      this.cliente.cliente.user = usuario;
      this.cliente.cliente.pass = clave;
      return this.http.post('http://192.168.2.32:3003/login/',this.cliente);
    }

    auth()
    {
      let token = localStorage.getItem("token");
      const header = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'token': token
        })
      };

      console.log("estoy en verificar y voy a mandar" + token);
      this.http.post('http://192.168.2.32:3003/auto/',"",header).subscribe(
        respuesta =>{
          console.log("resouesta verificar" + JSON.stringify(respuesta));
        }
      );

      this.http.get('http://192.168.2.32:3003/auto/',header).subscribe(
        respuesta =>{
          console.log("get de auto" + JSON.stringify(respuesta));
        }
      );
    }

    logOut()
    {
      localStorage.removeItem("token");
      this.router.navigate(['/']);
    }
    // cargarUno(){
    //   this.cliente.cliente.user = "usuario";
    //   this.cliente.cliente.pass = "123456";
    //   this.http.post('http://192.168.2.32:3003/clientes/',this.cliente).subscribe(
    //     respuesta => {
    //       console.log(respuesta);
    //     }
    //   );
    // }
}
