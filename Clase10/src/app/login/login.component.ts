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
  capcha: boolean;

  ngOnInit() {
  }

  ingresar()
  {
    if(this.usuario != null  || this.clave != null)
    {
      if(this.capcha)
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
        }
        else{
          this.mensaje = "Error! complete el captcha";
        }
    }else
    {
        this.mensaje = "Error! campos vacios";
    }
  }

  resolved(captchaResponse: string){
    this.capcha = captchaResponse != null;
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
