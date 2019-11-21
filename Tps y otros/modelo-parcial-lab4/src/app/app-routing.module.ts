import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuAlumnoComponent } from './componentes/menu-alumno/menu-alumno.component';
import { MenuProfesorComponent } from './componentes/menu-profesor/menu-profesor.component';
import { MenuAdminComponent } from './componentes/menu-admin/menu-admin.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"menu-alumno",component:MenuAlumnoComponent},
  {path:"menu-profesor",component:MenuProfesorComponent},
  {path:"menu-admin",component:MenuAdminComponent},
  {path:"registro",component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
