import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { LoginService } from '../login/login.service';
import { map } from 'rxjs/operators';
import { Materias } from '../../modals/materias';

@Component({
  selector: 'app-cliente-menu',
  templateUrl: './alumno-menu.component.html',
  styleUrls: ['./alumno-menu.component.css']
})
export class AlumnoMenuComponent implements OnInit {

  // auto : Auto = new Auto();
  // autos : Auto[];
  usuarioActual;
  materiasId: Materias[];
  idMateriaElejida : string;
  materiasAnotadas : Materias[];

  error : boolean;
  mensajeError : string;
  cargando: boolean;
  mensaje: boolean;


  constructor(private alumno : AlumnoService, private login : LoginService) { }

  ngOnInit() {
   this.usuarioActual = this.login.emailAcutual();
   console.log(this.usuarioActual);
      this.alumno.colecion.snapshotChanges().subscribe(
      async nose =>
      {
        let array = new Array()
        await nose.forEach(
             materia =>{
            let id = materia.payload.doc.id;
            let data = materia.payload.doc.data();            
            array.push({id,...data} as Materias);
            this.materiasId = array;
          }
        )
          this.filtrarMaterias();
      }
    )

    this.alumno.traerMisMaterias().subscribe(
      materiasMias =>
      {
        this.materiasAnotadas = materiasMias;
        console.log("ESTOY ANOTADO EN: " + this.materiasAnotadas);
      }
    )

  }

  filtrarMaterias()
  {
    this.materiasId = this.materiasId.filter(item => !item.alumnos.includes(this.usuarioActual));
    console.log(this.materiasId);
  }

  materiaElejida(e)
  {
    this.idMateriaElejida = e.path[0].value;
  }

  anotarmeMateria()
  {
    this.materiasId.forEach(
      materia =>
      {
        console.log(materia.id + " " + this.idMateriaElejida)
        if(materia.id == this.idMateriaElejida)
        {
          materia.alumnos.push(this.usuarioActual);
          materia.cupos = materia.cupos - 1;
          this.alumno.anotarmeAMateria(materia);
          return 0;
        }
      }
    )
  }

  // async AltaAutoCliente()
  // {
  //   if(this.auto.color == null || this.auto.kilometros == null || this.auto.marca == null || this.auto.patente == null || this.auto.tipo == null || this.auto.usuario == null)
  //   { 
  //     this.error = true;
  //     this.mensajeError = "Error! complete todos los campos para poder registrar un auto";
  //   }
  //   else{
  //     this.error = false;
  //     this.cargando = true;
  //     this.mensajeError = "Cargando auto... por favor espere";
  //     await this.cliente.altaAuto(this.auto);
  //     this.error = false;
  //     this.cargando = false;
  //     this.mensaje = true;
  //     this.mensajeError = "Registro exitoso!";
     
  //   }
  // }

  // getDatosTabla()
  // {
  //   let tabla = document.getElementById('tabla');
  //   console.log('tabla en cliente' + tabla);
  //   return tabla;
  // }

}
