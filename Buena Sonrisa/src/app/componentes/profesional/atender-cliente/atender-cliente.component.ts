import { Component, OnInit } from '@angular/core';
import { Turno } from '../../../entidades/turno';
import { BaseDeDatosService } from '../../../servicios/base-de-datos.service';
import { Resenia } from '../../../entidades/resenia';

@Component({
  selector: 'app-atender-cliente',
  templateUrl: './atender-cliente.component.html',
  styleUrls: ['./atender-cliente.component.css']
})
export class AtenderClienteComponent implements OnInit {


  misTurnos : Turno[];
  resenia : boolean;
  clienteResenia : any;

  mensaje : string;

  reseniaObjeto : Resenia ={
    hora : "",
    fecha : "",
    cliente : "",
    profesional : "",
    reseniaTexto : "",
  }
  constructor(private bd : BaseDeDatosService) { }

  ngOnInit() {

    let correoActual = localStorage.getItem("correo");

    this.bd.traerMisTurnosProfesional(correoActual).valueChanges().subscribe(
      turnosMios =>
      {
        this.misTurnos = turnosMios;
      }
    )

  }

  darReseniaMostrar(id : string)
  {
    this.resenia = true;
    this.clienteResenia = this.misTurnos.find(turno => turno.id == id);
  }

  darResenia()
  {
    if(this.reseniaObjeto.reseniaTexto != "")
    {
      this.reseniaObjeto.fecha = this.clienteResenia.fecha;
      this.reseniaObjeto.hora = this.clienteResenia.hora;
      this.reseniaObjeto.cliente = this.clienteResenia.cliente;
      this.reseniaObjeto.profesional = localStorage.getItem("correo");
      this.bd.altaResenia(this.reseniaObjeto);
      this.bd.eliminarTurno(this.clienteResenia.id);
      this.mensaje = "Se agrego la reseña, se marco al cliente como atendido y el turno se a dado de baja";
      this.resenia = false;
    }
  }

}
