import { Injectable } from '@angular/core';
import {  AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../../modals/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  colecion: AngularFirestoreCollection

    constructor(private angularFirestore: AngularFirestore, private angular : AngularFireAuth) { 
        this.colecion = this.angularFirestore.collection<Usuario>("usuarios");
    }

    async AltaUsuario(usuario : Usuario)
    {
        await this.angular.auth.createUserWithEmailAndPassword(usuario.email,usuario.clave).then(
           () =>
           {
             if(usuario.tipo =="profesor")
             {
              this.colecion.add({...usuario,materia : []})
             }
             else
             {
               this.colecion.add({...usuario}); 
             }
           }
           
        );
    }
}
