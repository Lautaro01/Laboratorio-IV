import { Injectable } from '@angular/core';
import {  AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../modals/usuario';
import { Materias } from '../../modals/materias';

@Injectable()
export class AlumnoService {

  colecion: AngularFirestoreCollection;
  colecionProfe: AngularFirestoreCollection;
    constructor(private angularFirestore: AngularFirestore) { 
        this.colecion = this.angularFirestore.collection<Materias>("materias");
        this.colecionProfe = this.angularFirestore.collection<Usuario>("usuarios");
    }
    id;
    materias;

    async IncribirseMaterias(materia,alumno)
    {
      
        await this.traerDatosAlumno(alumno).then(
          promesa =>{
            promesa.subscribe(
              hola =>{
                this.id = hola['0']['payload']['doc']['id'];
                this.materias = hola['0']['payload']['doc'].data()['materiasCursando'];
              }
            )
          }
        )
        setTimeout(() => this.modificarAlmunoMaterias(this.id,this.materias,materia), 1000);
    }

    async traerDatosAlumno(corre : string)
    {
      return await this.angularFirestore.collection("usuarios", ref => ref.where("email","==",corre)).stateChanges();
      
    }

    modificarAlmunoMaterias(id,materia,nuevaMateria)
    { 
      materia.push(nuevaMateria);
      this.angularFirestore.doc("usuarios/" + id).update(
        {
            materiasCursando : materia
        }
      )
    }

    async traerMisMaterias(correo : string)
    {
      return await this.angularFirestore.collection("usuarios", ref => ref.where("email","==",correo)).valueChanges();
    }

    async traerMateria()
    {
        return await this.angularFirestore.collection("materias").valueChanges();
    }

    async traerMateriaDatos(nombre)
    {
        return await this.angularFirestore.collection("materias",ref => ref.where("nombre","==",nombre)).valueChanges();
    }

}
