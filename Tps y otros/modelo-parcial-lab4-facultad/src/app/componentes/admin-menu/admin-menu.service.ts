import { Injectable } from '@angular/core';
import { Materias } from '../../modals/materias';
import {  AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../modals/usuario';

@Injectable({
  providedIn: 'root'
})
export class AdminMenuService {

  colecion: AngularFirestoreCollection;
  colecionProfe: AngularFirestoreCollection;

  constructor(private angularFirestore: AngularFirestore) {
    this.colecion = this.angularFirestore.collection<Materias>("materias");
    this.colecionProfe = this.angularFirestore.collection<Usuario>("usuarios", ref => ref.where('tipo','==','profesor'));
   }

  async AltaMateria(materia : Materias)
  {
    await this.colecion.add({...materia}); 
  }

  TraerMaterias()
  {
    return this.colecion.valueChanges();
  }

  TraerProfesores()
  {
    return this.colecionProfe.valueChanges();
  }

  TraerPorTipo(tipo : string)
  {
    let tipoSelect = this.angularFirestore.collection<Usuario>("usuarios", ref => ref.where('tipo','==',tipo));
    return tipoSelect.valueChanges();
  }
}
