import { Injectable } from '@angular/core';
import {  AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../modals/usuario';
import { Materias } from '../../modals/materias';

@Injectable({
  providedIn: 'root'
})
export class AbmGenericServis {

  colecion: AngularFirestoreCollection;
  colecionProfe: AngularFirestoreCollection;
    constructor(private angularFirestore: AngularFirestore) { 
        this.colecion = this.angularFirestore.collection<Materias>("materias");
        this.colecionProfe = this.angularFirestore.collection<Usuario>("usuarios");
    }
    id;
    materias;

    async AltaObjeto(Materias : Materias)
    {
      
        await this.colecion.add({...Materias}); 
        await this.traerDatosProfe(Materias.profesor).then(
          promesa =>{
            promesa.subscribe(
              hola =>{
                this.id = hola['0']['payload']['doc']['id'];
                this.materias = hola['0']['payload']['doc'].data()['materia'];
              }
            )
          }
        )
        setTimeout(() => this.modificarProfeMaterias(this.id,this.materias,Materias.nombre), 1000);
    }

    async traerDatosProfe(corre : string)
    {
      return await this.angularFirestore.collection("usuarios", ref => ref.where("email","==",corre)).stateChanges();
      
    }

    modificarProfeMaterias(id,materia,nuevaMateria)
    { 
      materia.push(nuevaMateria);
      this.angularFirestore.doc("usuarios/" + id).update(
        {
          materia : materia
        }
      )
    }

    async traerTipoGenerico(tipo : string)
    {
      return await this.angularFirestore.collection("usuarios", ref => ref.where("tipo","==",tipo)).valueChanges();
    }

    async traerMateria()
    {
        return await this.angularFirestore.collection("materias").valueChanges();
    }

}
