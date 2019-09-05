import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output()Cargar = new EventEmitter<any>();
  datos = new Array();
  nombre: string;
  sexo: string;
  sueldo: number;
  edad: number;
  licencia: string;
  fecha: string;

  constructor() { }

  ngOnInit() {
  }

  mandarDatos()
  {
    console.log(this.nombre + this.sexo);
  }

}
