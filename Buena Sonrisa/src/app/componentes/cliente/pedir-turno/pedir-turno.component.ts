import { Component, OnInit } from '@angular/core';
import { Turno } from '../../../entidades/turno';
import { Usuario } from '../../../entidades/usuario';
import { BaseDeDatosService } from '../../../servicios/base-de-datos.service';

@Component({
  selector: 'app-pedir-turno',
  templateUrl: './pedir-turno.component.html',
  styleUrls: ['./pedir-turno.component.css']
})
export class PedirTurnoComponent implements OnInit {


  turno : Turno ={
    fecha : "",
    hora : "",
    cliente : "",
    profesional : "",
  }

  mensaje : string;

  cargando : boolean;

  turnosExistentes : Turno[];

  misTurnos : Turno[];

  profesionales : Usuario[];

  turnoValido : boolean;

  constructor(private bd : BaseDeDatosService) { 

  }

  ngOnInit() {

    let correoActual = localStorage.getItem("correo");

    this.bd.traerProfesionales().subscribe(
      profe =>
      {
        this.profesionales = profe;
      }
    )

    this.bd.traerTurnos().subscribe(
      turnos =>{
        this.turnosExistentes = turnos;
        console.log(this.turnosExistentes);
      }
    )

    this.bd.traerMisTurnos(correoActual).valueChanges().subscribe(
      turnosMios =>
      {
        this.misTurnos = turnosMios;
      }
    )

  }

  async altaTurno()
  {
    this.cargando = true;
    if(this.turno.fecha != "" && this.turno.hora != ""  && this.turno.profesional != "")
    {
    for (const turnoExiste of this.turnosExistentes) {
        let minutoTurnoExistente = parseInt(turnoExiste.hora.split(':')[1]);
        let minutoTurnoActual = parseInt(this.turno.hora.split(':')[1]);

        let horaTurnoExistente = parseInt(turnoExiste.hora.split(':')[0]);
        let horaTurnoActual = parseInt(this.turno.hora.split(':')[0]);
      if(turnoExiste.fecha == this.turno.fecha && turnoExiste.profesional == this.turno.profesional)
      {
        if(turnoExiste.hora == this.turno.hora)
        {
          this.turnoValido = false;
          // console.log("Los sentimos ya existe un turno para la fecha " + this.turno.fecha + " con el profesional " + this.turno.profecional + "a las " + this.turno.hora);
          break;
        }
        else
        {
          if(horaTurnoActual == horaTurnoExistente)
          {
            if(minutoTurnoExistente - minutoTurnoActual <= -15 || minutoTurnoExistente - minutoTurnoActual >= 15)
            {
              // console.log("Pediste un turno a la mima ora que otro pero con 15 min de diferencia");
              this.turnoValido = true;
            }
            else
            {
              this.turnoValido = false;
              // console.log("Pediste un turno a la mima hora que otro y tenes " + (minutoTurnoExistente - minutoTurnoActual) + " min de diferencia RIP");
              break;
            }
          }
          else if(horaTurnoActual - horaTurnoExistente == -1 || horaTurnoActual - horaTurnoExistente == 1)
          {
            if(minutoTurnoExistente - minutoTurnoActual >= -45 && minutoTurnoExistente - minutoTurnoActual <= 45)
            {
              // console.log(minutoTurnoExistente - minutoTurnoActual);
              // console.log("Pediste un turno tipo 11:00 el que estaba y el turo 10:59 pero igual lo tenes");
              this.turnoValido = true;
            }
            else
            {
              // console.log("rip turno");
              this.turnoValido = false;
              break;
            }
          }
          else
          {
            this.turnoValido = true;
            // console.log("bien ahi tenes turno, creo ");
          }
        }
      }
      else
      {
        this.turnoValido = true;
      }
    }//fin foreach

    if(this.turnoValido == false)
    {
      this.cargando = false;
      this.mensaje = "Los sentimos ya existe un turno para la fecha: " + this.turno.fecha + " con el profesional " + this.turno.profesional + " a las " + this.turno.hora;
      // console.log("Los sentimos ya existe un turno para la fecha " + this.turno.fecha + " con el profesional " + this.turno.profecional + "a las " + this.turno.hora);
    }
    else
    {
      let correoActual = localStorage.getItem("correo");
      this.turno.cliente = correoActual;
      this.cargando = false;
      this.turnoValido = true;
      this.mensaje = "¡Turno exitoso!, ahora tienes un turno para la fecha: " + this.turno.fecha + " con el profesional " + this.turno.profesional + " a las " + this.turno.hora;
      this.bd.altaTurno(this.turno);
      console.log("Es tuyo el turno wachim");
    }
    }
    else
    {
      console.log("Completa los campos")
    }
  }

}
