import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeguardGuard } from './homeguard.guard';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component:HomeComponent,canActivate:[HomeguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
