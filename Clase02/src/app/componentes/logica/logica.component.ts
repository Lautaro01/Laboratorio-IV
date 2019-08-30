import { MostrarComponent } from './../mostrar/mostrar.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logica',
  templateUrl: './logica.component.html',
  styleUrls: ['./logica.component.css']
})
export class LogicaComponent implements OnInit {

  constructor() { }

  persona = [];
  MostrarDatos(personaDeForm)
  {
    this.persona.push({...personaDeForm});

  }

  ngOnInit() {
  }

}
