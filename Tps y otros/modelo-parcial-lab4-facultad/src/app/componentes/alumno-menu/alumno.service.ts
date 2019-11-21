import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Auto } from '../../modals/auto';
import { LoginService } from '../login/login.service';
import { Materias } from '../../modals/materias';
import { Usuario } from 'src/app/modals/usuario';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  colecion: AngularFirestoreCollection<Materias>
  micolecion: AngularFirestoreCollection<Materias>

  constructor(private angularFirestore: AngularFirestore, private login : LoginService) {
    let usuario = login.emailAcutual();
    this.colecion = this.angularFirestore.collection<Materias>("materias", ref => ref.where('cupos','>',0));
    this.micolecion = this.angularFirestore.collection<Materias>("materias", ref => ref.where('alumnos','array-contains',usuario));
   }

  traerMaterias()
  {
    return this.colecion.valueChanges();
  }

  traerMisMaterias()
  {
    return this.micolecion.valueChanges();
  }

  anotarmeAMateria(materia : Materias)
  {
    this.colecion.doc(materia.id).set(materia);
  }


}
