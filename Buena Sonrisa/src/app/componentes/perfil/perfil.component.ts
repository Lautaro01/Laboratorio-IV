import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';
import { Usuario } from '../../entidades/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private bd : BaseDeDatosService) { }

  usuario : Usuario = {
    nombre : "",
    apellido :"",
    correo : "",
    foto :"",
    clave : "",
    tipo :""
  }
  ngOnInit() {
    let correo = localStorage.getItem("correo");
    this.bd.traerUsuarioConEmail(correo).valueChanges().subscribe(
      user =>
      {
        this.usuario = user[0];
      }
    )
  }

  cerrarSesion()
  {
    this.bd.cerrarSesion();
  }

}
