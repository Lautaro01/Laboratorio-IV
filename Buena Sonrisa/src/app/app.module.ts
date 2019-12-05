import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroModule } from './componentes/registro/registro.module';
import { AngularFireModule } from '@angular/fire';
import { config } from './firebase';
import { RecapchatCustomModule } from './componentes/recapchat/recapchaCustom.module';
import { BaseDeDatosService } from './servicios/base-de-datos.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MenuClienteComponent } from './componentes/cliente/menu-cliente/menu-cliente.component';
import { FormsModule } from '@angular/forms';
import { PedirTurnoComponent } from './componentes/cliente/pedir-turno/pedir-turno.component';
import { MenuProfesionalComponent } from './componentes/profesional/menu-profesional/menu-profesional.component';
import { AtenderClienteComponent } from './componentes/profesional/atender-cliente/atender-cliente.component';
import { ReseniasClienteComponent } from './componentes/cliente/resenias-cliente/resenias-cliente.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuClienteComponent,
    PedirTurnoComponent,
    MenuProfesionalComponent,
    AtenderClienteComponent,
    ReseniasClienteComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RegistroModule,
    AngularFireModule.initializeApp(config),
    RecapchatCustomModule,
    AngularFireAuthModule
  ],
  providers: [BaseDeDatosService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
