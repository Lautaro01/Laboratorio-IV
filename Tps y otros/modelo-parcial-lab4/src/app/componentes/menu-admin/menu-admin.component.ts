import { Component, OnInit } from '@angular/core';
import { AbmGenericServis } from './abm-generic.servi';
import { Usuario } from '../../modals/usuario';
import { Materias } from '../../modals/materias';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  profesores : Usuario[];
  usuarios : Usuario[];
  
  constructor(private abmMaterias : AbmGenericServis) { 
    
  }
  materia : Materias = new Materias();
  materiasTabla : Materias[];
  
  error : boolean = false;
  mensajeError : string = "";
  cargando : boolean = false;
  mensaje : boolean = false;

  ngOnInit() {
    this.abmMaterias.traerTipoGenerico('profesor').then(
      coleccion =>{
        coleccion.subscribe(
          coleccion2 =>{
            console.log(coleccion2);
            this.profesores = coleccion2
          }
        );
      }
    );

    this.abmMaterias.traerMateria().then(
      coleccion =>
      {
        coleccion.subscribe(
          coleccion2 =>{
            console.log(coleccion2);
            this.materiasTabla = coleccion2;
          }
        )
      }
    )
  }

  async altaDeAlgo()
  {
    if(this.materia.nombre == null|| this.materia.cuatrimestre == null || this.materia.cupos == null || this.materia.profesor == null)
    {
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder registrar una nueva cuenta";
    }
    else{
      this.error = false;
      this.cargando = true;
      this.mensajeError = "Cargando materia... por favor espere";
      await this.abmMaterias.AltaObjeto(this.materia);
      this.cargando = false
      this.mensaje = true;
      this.mensajeError = "Materia cargada con exito";
    }
  }

  traerPorTipo(evento)
  {
    console.log(evento.path[0].value);
    this.abmMaterias.traerTipoGenerico(evento.path[0].value).then(
      nose =>{
        nose.subscribe(
          usuarios =>{
            this.usuarios = usuarios;
          }
        )
      }
    )
  }


}
