import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private servi: LoginService) { }

  usuario: string;
  clave: string;
  mensaje ="";
  ngOnInit() {
    // this.servi.cargarUno();
  }

  ingresar()
  {
    if(this.usuario != null  || this.clave != null)
    {
      try {
        this.servi.ingresar(this.usuario, this.clave).subscribe(
          respuesta => {
            if (respuesta['token'] != null){
              console.log(respuesta);
              localStorage.setItem('token', respuesta['token']);
              this.router.navigate(['/home']);
            } else {
            this.mensaje =  'Error! usuario invalido';
            }
        }
        );
      } catch (error) {
        console.log("error");
      }
    }else
    {
        this.mensaje = "Error! campos vacios";
    }
  }


  autenticar()
  {
    this.servi.auth();
  }

  borrado()
  {
    this.servi.logOut();
  }
}
