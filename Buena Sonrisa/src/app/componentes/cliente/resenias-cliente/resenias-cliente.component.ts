import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from '../../../servicios/base-de-datos.service';
import { Resenia } from '../../../entidades/resenia';

@Component({
  selector: 'app-resenias-cliente',
  templateUrl: './resenias-cliente.component.html',
  styleUrls: ['./resenias-cliente.component.css']
})
export class ReseniasClienteComponent implements OnInit {


  misResenias : Resenia[];
  encuestaBolean : boolean;
  encuestaMensaje : boolean;
  rangoValor : string;
  mensaje : string;

  constructor(private bd : BaseDeDatosService) { }

  ngOnInit() {
    let correo = localStorage.getItem("correo");
    this.bd.traerMisResenias(correo).valueChanges().subscribe(
      resenia =>{
        this.misResenias = resenia;
      }
    )
  }

  encuesta()
  {
    this.encuestaBolean = true;
  }

  rango(e)
  {
   this.rangoValor = e.target.value;
  }

  dejarEncuesta()
  {
    this.encuestaBolean = false;
    this.encuestaMensaje = true;
    this.mensaje = "Gracias por participar de nuestra encuesta";
  }

}
