import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule } from '@angular/forms';
import { RegistroService } from './registro.service';
import { AngularFireModule } from '@angular/fire';
import { config } from '../../firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    RouterModule
  ],
  exports: [RegistroComponent],
  providers : [RegistroService,AngularFireAuth,AngularFirestore]

})
export class RegistroModule { }
