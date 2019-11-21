import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteMenuComponent } from './cliente-menu.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { ClinteService } from './clinte.service';
import { PdfgeneratorModule } from '../pdfgenerator/pdfgenerator.module';
import { NombreytipoModule } from '../nombreytipo/nombreytipo.module';



@NgModule({
  declarations: [
    ClienteMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    PdfgeneratorModule,
    NombreytipoModule
  ],
  providers : [ClinteService]
})
export class ClienteMenuModule { }
