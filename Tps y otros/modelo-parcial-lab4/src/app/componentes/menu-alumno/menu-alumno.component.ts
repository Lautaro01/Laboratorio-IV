import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.servise';
import { LoginService } from '../login/login.service';
import { Materias } from '../../modals/materias';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.component.html',
  styleUrls: ['./menu-alumno.component.css']
})
export class MenuAlumnoComponent implements OnInit {

  constructor(private servi : AlumnoService,
    private login : LoginService) { }

  materiaAinscribirme;
  materiasSelect : Materias[];
  materiasInscripto : Materias[];
  materiasDatos: Materias[];
  emailactual

  error : boolean;
  cargando : boolean;
  mensajeError;
  mensaje : boolean;
  async ngOnInit() {
    
    this.emailactual = await this.login.emailAcutual();
    console.log(this.emailactual);
    this.servi.traerMateria().then(
      promesa =>{
        promesa.subscribe(
          materias =>{
            this.materiasSelect = materias;
          }
        )
      }
    )

    await this.servi.traerMisMaterias(this.emailactual).then(
      promesa=>{
        promesa.subscribe(
          datos=>{
            console.log(datos['0']['materiasCursando']);
            this.materiasInscripto = datos['0']['materiasCursando'];
          }
        )
      }
    )
  }

  async IncribirseMateriasHTML()
  {
    this.error = false;
    this.cargando = true;
    this.mensajeError = "Cargando materia... por favor espere";
    this.servi.IncribirseMaterias(this.materiaAinscribirme,this.emailactual);
    this.cargando = false
    this.mensaje = true;
    this.mensajeError = "Materia cargada con exito";
  }

  ngOnDestroy()
  {
    console.log("se limpio el storage");
    localStorage.clear();
  }




}
