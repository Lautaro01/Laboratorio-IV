import { PeticionesService } from './peticiones';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import * as jsPDF from 'jspdf';
import { toBase64String } from '@angular/compiler/src/output/source_map';


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
  imagen;

  handleFileSelect(evt){ 
    var files = evt.target.files; 
    var file = files[0]; 

   if (files && file) { 
    var reader = new FileReader(); 

    reader.onload =this._handleReaderLoaded.bind(this); 

    reader.readAsBinaryString(file); 
   } 
   } 



   _handleReaderLoaded(readerEvt) { 
      var binaryString = readerEvt.target.result; 
     this.imagen = "data:image/png;base64," + btoa(binaryString)
   } 

  
  descargarPDF()
  {
    let tabla = document.getElementById('tabla');
    const doc = new jsPDF({
      orientacion:'1',
      unit:'pt',
      format:'A4'
    });
    doc.text("Tabla de autos",100,15);
    doc.fromHTML(tabla,100,15);
    doc.save("tabla.pdf");
  }

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
