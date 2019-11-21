import { Component, OnInit,Input } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdfgenerator',
  templateUrl: './pdfgenerator.component.html',
  styleUrls: ['./pdfgenerator.component.css']
})
export class PDFgeneratorComponent implements OnInit {

  @Input() tabla;

  constructor() { }

  ngOnInit(){
  }

  descargarPDF()
  {
    //let tabla = document.getElementById('tabla');
    const doc = new jsPDF({
      orientacion:'1',
      unit:'pt',
      format:'A4'
    });
    console.log(this.tabla);
    doc.text("Tabla de autos",100,15);
    doc.fromHTML(this.tabla,100,15);
    doc.save("tabla.pdf");
  }

}
