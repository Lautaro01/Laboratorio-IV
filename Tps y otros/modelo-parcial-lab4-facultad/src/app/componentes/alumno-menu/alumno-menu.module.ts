import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoMenuComponent } from './alumno-menu.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { AlumnoService } from './alumno.service';
// import { PdfgeneratorModule } from '../pdfgenerator/pdfgenerator.module';
// import { NombreytipoModule } from '../nombreytipo/nombreytipo.module';



@NgModule({
  declarations: [
    AlumnoMenuComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    // PdfgeneratorModule,
    // NombreytipoModule
  ],
  exports : [AlumnoMenuComponent]
})
export class AlumnoMenuModule { }
