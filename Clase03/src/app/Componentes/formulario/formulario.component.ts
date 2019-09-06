import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Clases/persona';
import { ListaPersonasService } from 'src/app/Servicios/lista-personas.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public listaServicio : ListaPersonasService, public personaParam : Persona) {}

  //personaParam : Persona;

  ngOnInit() {
  }

  agregarPersonaLista()
  {

    this.personaParam = new Persona(this.personaParam.nombre,
      this.personaParam.sexo,
      this.personaParam.sueldo,
      this.personaParam.edad,
      this.personaParam.licencia,
      this.personaParam.nacimiento)
    console.log(this.personaParam);
    this.listaServicio.setObjInLista(this.personaParam);
  }

}
