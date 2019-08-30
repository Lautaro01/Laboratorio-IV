import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  @Output()cargar = new EventEmitter();

  datos = {
    nombre: '',
    apellido: ''
  };


  manejadora() {
    this.cargar.emit(this.datos);
  }

  ngOnInit() {
  }

}
