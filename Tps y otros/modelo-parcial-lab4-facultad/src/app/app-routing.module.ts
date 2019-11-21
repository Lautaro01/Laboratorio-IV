import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminMenuComponent } from './componentes/admin-menu/admin-menu.component';
import { AlumnoMenuComponent } from './componentes/alumno-menu/alumno-menu.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'alumno-menu',component:AlumnoMenuComponent},
  {path:'admin-menu',component:AdminMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
