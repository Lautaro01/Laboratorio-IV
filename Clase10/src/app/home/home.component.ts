import { PeticionesService } from './peticiones';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servis : LoginService, private peticiones : PeticionesService) {
    this.traerAutos();
    console.log(this.autos);
  }
  auto = {auto : {marca : "", color : "", modelo : ""}}

  autos = [];


  ngOnInit() {
  }

  agregarAuto()
  {
    this.peticiones.cargarAuto(this.auto);
    this.traerAutos();
  }

  traerAutos()
  {
    this.peticiones.traerTodosLosAutos().subscribe(
      respuesta =>{
        console.log(respuesta);
       this.autos = respuesta["rta"];
      }
    );
  }

  salir()
  {
    this.servis.logOut();
  }

}
