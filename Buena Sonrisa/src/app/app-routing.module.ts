import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componentes/login/login.component'
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuClienteComponent } from './componentes/cliente/menu-cliente/menu-cliente.component';
import { PedirTurnoComponent } from './componentes/cliente/pedir-turno/pedir-turno.component';
import { MenuProfesionalComponent } from './componentes/profesional/menu-profesional/menu-profesional.component';
import { AtenderClienteComponent } from './componentes/profesional/atender-cliente/atender-cliente.component';
import { ReseniasClienteComponent } from './componentes/cliente/resenias-cliente/resenias-cliente.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ClienteGuard } from './componentes/cliente/cliente.guard';
import { ProfesionalGuard } from './componentes/profesional/profesional.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'menu-cliente',component:MenuClienteComponent, canActivate :[ClienteGuard],children : [
    {path:'pedir-turno',component:PedirTurnoComponent},
    {path:'resenias-cliente',component:ReseniasClienteComponent},
    {path:'perfil',component:PerfilComponent},
  ]},
  {path:'menu-profesional',component:MenuProfesionalComponent,canActivate :[ProfesionalGuard], children : [
    {path:'atender-cliente',component:AtenderClienteComponent},
    {path:'perfil',component:PerfilComponent},
  ]},
  {path:'**',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
