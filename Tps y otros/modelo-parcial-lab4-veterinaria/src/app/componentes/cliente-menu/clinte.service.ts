import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../modals/usuario';
import { Auto } from '../../modals/auto';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ClinteService {

  colecion: AngularFirestoreCollection<Auto>

  constructor(private angularFirestore: AngularFirestore, private login : LoginService) {
    this.colecion = this.angularFirestore.collection<Auto>("autos");
   }


  async altaAuto(auto : Auto)
  {
    this.colecion.add({...auto});
  }

  traerAutos()
  {
    return this.colecion.valueChanges();
  }


  // datosCliente()
  // {
  //   //console.log(localStorage.getItem('tipo'));
  // }

}
