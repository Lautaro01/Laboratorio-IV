import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroModule } from './componentes/registro/registro.module';
import { RecapchatCustomModule } from './componentes/recapchat/recapchaCustom.module';
import { LoginModule } from './componentes/login/login.module';
import { ClienteMenuModule } from './componentes/cliente-menu/cliente-menu.module';
import { AdminMenuComponent } from './componentes/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroModule,
    RecapchatCustomModule,
    LoginModule,
    ClienteMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
