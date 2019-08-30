import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { LogicaComponent } from './componentes/logica/logica.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MostrarComponent,
    LogicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
