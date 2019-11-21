import { Component, OnInit } from '@angular/core';
import { ClinteService } from './clinte.service';
import { LoginService } from '../login/login.service';
import { Auto } from '../../modals/auto';

@Component({
  selector: 'app-cliente-menu',
  templateUrl: './cliente-menu.component.html',
  styleUrls: ['./cliente-menu.component.css']
})
export class ClienteMenuComponent implements OnInit {

  auto : Auto = new Auto();
  autos : Auto[];
  usuarioActual;
  
  error : boolean;
  mensajeError : string;
  cargando: boolean;
  mensaje: boolean;

  constructor(private cliente : ClinteService, private login : LoginService) { }

  ngOnInit() {
   this.usuarioActual = this.login.emailAcutual();
   this.auto.usuario = this.usuarioActual;
    this.cliente.traerAutos().subscribe(
      autos =>{
        this.autos = autos;
        console.log(this.autos);
      }
   )
  }

  async AltaAutoCliente()
  {
    if(this.auto.color == null || this.auto.kilometros == null || this.auto.marca == null || this.auto.patente == null || this.auto.tipo == null || this.auto.usuario == null)
    { 
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder registrar un auto";
    }
    else{
      this.error = false;
      this.cargando = true;
      this.mensajeError = "Cargando auto... por favor espere";
      await this.cliente.altaAuto(this.auto);
      this.error = false;
      this.cargando = false;
      this.mensaje = true;
      this.mensajeError = "Registro exitoso!";
     
    }
  }

  getDatosTabla()
  {
    let tabla = document.getElementById('tabla');
    console.log('tabla en cliente' + tabla);
    return tabla;
  }

}
