import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './admin-menu.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AdminFiltroComponent } from './admin-filtro/admin-filtro.component';




@NgModule({
  declarations: [AdminMenuComponent, AdminFiltroComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule
  ],
  exports: [AdminMenuComponent,AdminFiltroComponent]
})
export class AdminMenuModule { }
