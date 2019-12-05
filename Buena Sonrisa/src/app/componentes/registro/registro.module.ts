import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule } from '@angular/forms';
import { RecapchatCustomModule } from '../recapchat/recapchaCustom.module';
import { RouterModule } from '@angular/router';
// import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
// import { AngularFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecapchatCustomModule,
    RouterModule,
    ],
    // providers : [BaseDeDatosService,AngularFirestore],
  exports: [RegistroComponent]
})
export class RegistroModule { }
