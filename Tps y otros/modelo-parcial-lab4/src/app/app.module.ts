import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './componentes/login/login.module';
import { RegistroModule } from './componentes/registro/registro.module';
import { FormsModule } from '@angular/forms';
import { MenuAdminComponent } from './componentes/menu-admin/menu-admin.component';
import { MenuProfesorComponent } from './componentes/menu-profesor/menu-profesor.component';
import { MenuAlumnoComponent } from './componentes/menu-alumno/menu-alumno.component';
import { AlumnoService } from './componentes/menu-alumno/alumno.servise';


@NgModule({
  declarations: [
    AppComponent,
    MenuAlumnoComponent,
    MenuProfesorComponent,
    MenuAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistroModule,
    FormsModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
