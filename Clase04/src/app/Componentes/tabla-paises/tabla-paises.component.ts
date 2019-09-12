import { ServicioPais } from './../../Servicios/ServicioPais';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  constructor(private servicioPais : ServicioPais) { }


  lista;


  ngOnInit() {
    this.servicioPais.getPaises().subscribe( data => {
      this.lista = data;
    });
  }

}
