import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modals/usuario';
import { RegistroService } from './registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private registro : RegistroService,
    private ruta : Router) { }

  usuario : Usuario = new Usuario();
  error : boolean = false;
  mensajeError : string = "";
  cargando : boolean = false;
  mensaje : boolean = false;
  ngOnInit() {
  }

  async registrarUusario()
  {
    
    if(this.usuario.email == null|| this.usuario.tipo == null || this.usuario.clave == null)
    {
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder registrar una nueva cuenta";
    }
    else
    { 
      this.error = false;
      this.cargando = true;
      this.mensajeError = "Cargando usuario... por favor espere";
      await this.registro.AltaUsuario(this.usuario);
      this.cargando = false
      this.mensaje = true;
      this.mensajeError = "Usuario cargado con exito";
    }
  }

  volver()
  {
    this.ruta.navigate(['/']);
  }
}
