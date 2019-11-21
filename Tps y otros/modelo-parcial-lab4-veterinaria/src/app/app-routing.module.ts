import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ClienteMenuComponent } from './componentes/cliente-menu/cliente-menu.component';
import { ClienteMenuGuard } from './componentes/cliente-menu/cliente-menu.guard';
import { AdminMenuComponent } from './componentes/admin-menu/admin-menu.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'cliente-menu',component:ClienteMenuComponent, canActivate: [ClienteMenuGuard]},
  {path:'admin-menu',component:AdminMenuComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
