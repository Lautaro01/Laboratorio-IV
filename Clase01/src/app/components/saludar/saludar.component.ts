import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {
  
  nombre;
  apellido;
  flag = true;

  constructor() {}
  ngOnInit() {}

  manejadora()
  {
    this.flag = !this.flag;
  }
}
