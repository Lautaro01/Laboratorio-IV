import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaPaisesComponent } from './Componentes/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioPais } from './Servicios/ServicioPais';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    TablaPaisesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule
  ],
  providers: [ServicioPais],
  bootstrap: [AppComponent]
})
export class AppModule { }
