import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutas : Router,
    private loginServi : LoginService) { }


  correo : string = "";
  clave : string = "";
  error : boolean = false;
  mensajeError : string = "";
  cargando : boolean = false;
  

  async ingresar()
  {
    if(this.correo == "" || this.clave == "")
    {
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder ingresar"
    }
    else{
      this.error = false;
      this.cargando = true;
      let respuesta = await this.loginServi.ingresar(this.correo,this.clave);
      switch (respuesta) {
        case "The email address is badly formatted.":
            this.error = true;
            this.cargando = false;
          this.mensajeError = "Error! El correo electronico tiene un formato incorrecto.";
          break;
        case "The password is invalid or the user does not have a password.":
            this.error = true;
            this.cargando = false;
          this.mensajeError = "Error! La contraseña es incorrecta";
          break;
        case "There is no user record corresponding to this identifier. The user may have been deleted.":
            this.error = true;
            this.cargando = false;
            this.mensajeError = "Error! la cuenta con la que intenta ingresar no existe";
            break;
        default:
           let promesa = await this.loginServi.traerUsuario(this.correo).subscribe(
            respuesta =>{ 
            this.error = false;
            this.cargando = false;
              console.log(respuesta);
             switch (respuesta['0']['tipo']){
              case 'cliente':
                localStorage.setItem("tipoUsuario","cliente");
                this.rutas.navigate(["/cliente-menu"]);
                promesa.unsubscribe();
                break;
              case 'admin':
                localStorage.setItem("tipoUsuario","admin");
                this.rutas.navigate(["/admin-menu"]);
                promesa.unsubscribe();
              break;
             }
            }
          )
          break;
      }
    }
    console.log(this.correo + this.clave);
  }

  registro()
  {
    this.rutas.navigate(['/registro']);
  }

  ngOnInit() {
    this.loginServi.cerrarSesion();
  }

}
