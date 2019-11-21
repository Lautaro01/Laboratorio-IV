import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './componentes/login/login.module'
import { RegistroModule } from './componentes/registro/registro.module';
import { RecapchatCustomModule } from './componentes/recapchat/recapchaCustom.module';
import { AdminMenuModule } from './componentes/admin-menu/admin-menu.module';
import { AlumnoMenuModule } from './componentes/alumno-menu/alumno-menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistroModule,
    RecapchatCustomModule,
    AdminMenuModule,
    AlumnoMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
