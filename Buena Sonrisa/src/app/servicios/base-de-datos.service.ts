import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Usuario } from '../entidades/usuario';
import { Turno } from '../entidades/turno';
import { Resenia } from '../entidades/resenia';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  private coleccionClientes: AngularFirestoreCollection<Usuario>
  private colecionProfe: AngularFirestoreCollection<Usuario>
  private colecionGeneral: AngularFirestoreCollection<Usuario>

  private colecionTurno: AngularFirestoreCollection<Turno>

  private coleccionResenias: AngularFirestoreCollection<Resenia>

  constructor(private angularFirestore: AngularFirestore,private auth : AngularFireAuth, private router : Router) { 
    this.coleccionClientes = this.angularFirestore.collection<Usuario>("entidades",ref => ref.where('tipo','==','cliente'));
    this.colecionProfe = this.angularFirestore.collection<Usuario>("entidades", ref => ref.where('tipo','==','profesional'));
    this.colecionGeneral = this.angularFirestore.collection<Usuario>("entidades");

    this.colecionTurno = this.angularFirestore.collection<Turno>("turnos");

    this.coleccionResenias = this.angularFirestore.collection<Resenia>("resenias");

  }

  //Alta//

  altaUsuario(usuario : Usuario)
  {
    try{
      this.auth.auth.createUserWithEmailAndPassword(usuario.correo, usuario.clave).then(
        ()=>
        {
          let id = this.angularFirestore.createId();
          usuario.id = id;
          this.colecionGeneral.doc(id).set(usuario);
        }
      );
    }
    catch(error){
      return error.message;
    }
  }

  async iniciarSecion(email : string, clave : string)
  {
    try {
      let verificar = await this.auth.auth.signInWithEmailAndPassword(email,clave);
      let correo = await verificar.user.email;
      verificar.user.getIdToken().then(
        token =>
        {
          localStorage.setItem("token",token);
        }
      )
      localStorage.setItem("correo",correo);
    } catch (error) {
      return error.message;
    }
  }

  altaTurno(turno : Turno)
  {
    console.log("ENTRE ALTA TURNO");
    try{
      let id = this.angularFirestore.createId();
      turno.id = id;
      this.colecionTurno.doc(id).set(turno);
    }
    catch(error){
      console.log(error.message);
      return error.message;
    }
  }

  altaResenia(resenia : Resenia)
  {
    try{
      let id = this.angularFirestore.createId();
      resenia.id = id;
      this.coleccionResenias.doc(id).set(resenia);
    }
    catch(error){
      console.log(error.message);
      return error.message;
    }
  }

  //traer//
  traerMisResenias(correo : string)
  {
    return this.angularFirestore.collection<Resenia>("resenias",ref => ref.where("cliente","==",correo));
  }

  traerProfesionales()
  {
    return this.colecionProfe.valueChanges()
  }

  traerUsuarioConEmail(correo : string)
  {
    return this.angularFirestore.collection<Usuario>("entidades",ref => ref.where("correo","==",correo));
  }

  traerTurnos()
  {
    return this.colecionTurno.valueChanges();
  }

  traerMisTurnos(correo : string)
  {
    return  this.angularFirestore.collection<Turno>("turnos", ref => ref.where("cliente","==",correo));
  }

  traerMisTurnosProfesional(correo : string)
  {
    return  this.angularFirestore.collection<Turno>("turnos", ref => ref.where("profesional","==",correo));
  }


  //baja//

  eliminarTurno(id : string)
  {
    this.angularFirestore.collection<Turno>("turnos").doc(id).delete();
  }

  //otros//
  cerrarSesion()
  {
      localStorage.clear();
      this.auth.auth.signOut();
      this.router.navigate(['']);
  }

}
