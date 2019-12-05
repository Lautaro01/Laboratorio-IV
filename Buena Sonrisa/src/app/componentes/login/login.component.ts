import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login : BaseDeDatosService, private ruta : Router) { }

  correo : string;
  clave : string;
  error : boolean;
  cargando : boolean;
  mensaje : string;

  ngOnInit() {
    localStorage.clear();
  }

  async iniciarSecion()
  {
    if(this.correo == "" || this.clave == "" || this.correo == null || this.clave == null)
    {
      this.error = true;
      this.mensaje = "Error! complete todos los campos para poder ingresar"

      setTimeout(() => {
        this.error = false;
      }, 2000);
    }
    else
    {
      this.cargando = true;
      this.error = false;
      let mensaje = await this.login.iniciarSecion(this.correo,this.clave);
      switch (mensaje) {
        case "The email address is badly formatted.":
            this.error = true;
            this.cargando = false;
          this.mensaje = "Error! El correo electronico tiene un formato incorrecto.";
          break;
        case "The password is invalid or the user does not have a password.":
            this.error = true;
            this.cargando = false;
          this.mensaje = "Error! La contraseña es incorrecta";
          break;
        case "There is no user record corresponding to this identifier. The user may have been deleted.":
            this.error = true;
            this.cargando = false;
            this.mensaje = "Error! la cuenta con la que intenta ingresar no existe";
            break;
        default:
          this.ruta.navigate(["/menu-cliente"]);
           let promesa = await this.login.traerUsuarioConEmail(this.correo).valueChanges().subscribe(
            respuesta =>{ 
            this.error = false;
            this.cargando = false;
             switch (respuesta['0']['tipo']){
              case 'cliente':
                localStorage.setItem("tipo","cliente");
                this.ruta.navigate(["/menu-cliente"]);
                promesa.unsubscribe();
                break;
              case 'profesional':
                localStorage.setItem("tipo","profesional");
                this.ruta.navigate(["/menu-profesional"]);
                promesa.unsubscribe();
                break;
              // case 'admin':
              //   localStorage.setItem("tipoUsuario","admin");
              //   this.rutas.navigate(["/admin-menu"]);
              //   promesa.unsubscribe();
              // break;
             }
          });
      }
    }
  }

}
