import { Component, OnInit } from '@angular/core';
import { ListaPersonasService } from 'src/app/Servicios/lista-personas.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private listaServ : ListaPersonasService) { }

  ngOnInit() {
    console.log(this.listaServ.getLista());
  }
  
}
