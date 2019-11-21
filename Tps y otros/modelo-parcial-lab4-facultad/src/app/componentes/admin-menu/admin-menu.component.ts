import { Component, OnInit } from '@angular/core';
import { Materias } from '../../modals/materias';
import { AdminMenuService } from './admin-menu.service';
import { Usuario } from '../../modals/usuario';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  nuevaMateria : Materias = new Materias;
  materiasTabla : Materias[];

  profesSelect : Usuario[];

  error : boolean;
  mensajeError : string;
  cargando: boolean;
  mensaje: boolean;


  constructor(private admin : AdminMenuService) { }

  ngOnInit() {
    this.admin.TraerMaterias().subscribe(
      materias =>
      {
        this.materiasTabla = materias;
      }
    )

    this.admin.TraerProfesores().subscribe(
      profes =>{
        this.profesSelect = profes;
      }
    )
  }

  async AltaMateriasMenu()
  {
    console.log(this.nuevaMateria);
    if(this.nuevaMateria.nombre == null || this.nuevaMateria.cupos == null || this.nuevaMateria.cuatrimestre == null || this.nuevaMateria.profesor == null)
      { 
        this.error = true;
        this.mensajeError = "Error! complete todos los campos para poder registrar una materia";
      }
      else{
        this.error = false;
        this.cargando = true;
        this.mensajeError = "Cargando materia... por favor espere";
        this.nuevaMateria.id = "";
        this.nuevaMateria.alumnos = [];
        await this.admin.AltaMateria(this.nuevaMateria);
        this.error = false;
        this.cargando = false;
        this.mensaje = true;
        this.mensajeError = "Registro exitoso!";
       
      }
  }

}
