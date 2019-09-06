import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { TablaComponent } from './Componentes/tabla/tabla.component';
import { ListaPersonasService } from './Servicios/lista-personas.service';
import { Persona } from './Clases/persona';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListaPersonasService, Persona],
  bootstrap: [AppComponent]
})
export class AppModule { }
