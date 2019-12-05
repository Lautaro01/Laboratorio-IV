import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import { Usuario } from 'src/app/entidades/usuario';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private registro : BaseDeDatosService,
    private domnoseque : DomSanitizer,
    private ruta : Router) { }

  usuario : Usuario ={
    correo : "",
    clave : "",
    nombre : "",
    apellido : "",
    foto : "",
    turno : "no",
    tipo : ""
  }

  base64 : string;
  error : boolean = false;
  mensajeError : string = "";
  cargando : boolean = false;
  mensaje : boolean = false;
  capcha : boolean = false;
  
  ngOnInit() {
  }

  async registrarUusario()
  {
    
    if(this.usuario.clave == null|| this.usuario.correo == null || this.usuario.nombre == null  || this.usuario.apellido == null)
    {
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder registrar una nueva cuenta";
    }
    else
    { 
      if(this.capcha)
      {
        if(this.usuario.clave == ""|| this.usuario.correo == "" || this.usuario.nombre == ""  || this.usuario.apellido == "")
        {
          this.error = true;
          this.mensajeError = "Error! complete todos los campos para poder registrar una nueva cuenta";
        }
        else
        {
          this.error = false;
          this.cargando = true;
          this.mensajeError = "Cargando usuario... por favor espere";
          console.log(this.usuario);
          let mensajeAlta = await this.registro.altaUsuario(this.usuario);
          if(mensajeAlta != null)
          {
            this.cargando = false;
            this.mensaje = false;
            this.error = true;
            this.mensajeError = mensajeAlta;
          }
          else
          {
            this.error = false;
            this.cargando = false;
            this.mensaje = true;
            this.mensajeError = "Registro exitoso!";
          }   
        }
        
      }
      else
      {
        this.error = true;
        this.mensajeError = "Error! Complete el recapcha";
      }
    }
  }

  verSalida(e)
  {
    this.capcha = e;
  }

  volver()
  {
    this.ruta.navigate(['/']);
  }

  verFoto(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
      // console.log(reader.result);
        // this.base64 = 'data:image/png' + ';base64,' + reader.result.slice();
        this.usuario.foto = reader.result.toString();
        // console.log(this.usuario.foto);
      };
    }
    console.log("jajsda");
  }

  sanitize() {
    //return url;
    return this.domnoseque.bypassSecurityTrustUrl(this.usuario.foto);
  }
}
