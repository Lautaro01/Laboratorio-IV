import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Usuario } from '../../modals/usuario';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  colecion: AngularFirestoreCollection<Usuario>;
  
  constructor(
    private angularFirestore: AngularFirestore, 
    private auth : AngularFireAuth,
    private router : Router,
    private JWT : JwtHelperService) {
  }


  
  async ingresar(correo : string, clave : string)
  {
      try {
          await this.auth.auth.signInWithEmailAndPassword(correo,clave).then(
              luego =>{
                luego.user.getIdToken().then(
                      token=>{
                        localStorage.clear();
                        localStorage.setItem("token", token);
                        console.log(this.JWT.decodeToken(token));
                      }
                  )
              }
          );
      } catch (error) {
          return error.message;
      }
  }
  
  traerUsuario(correo : string)
  {
    return this.angularFirestore.collection("usuarios", ref => ref.where("email","==",correo)).valueChanges();
  }

  traerDatosUsuario()
  {
    return this.traerUsuario(this.auth.auth.currentUser.email);
  }

  emailAcutual()
  {
    let token = localStorage.getItem('token');
    return  this.JWT.decodeToken(token)["email"]
  }

  cerrarSesion()
  {
    this.auth.auth.signOut().then(
    () => {
        localStorage.clear();
        this.router.navigate(['']);
    });
  }

  async usuarioAutenticado()
  {
    let token = localStorage.getItem('token');
    console.log(this.JWT.decodeToken(token)["email"]);
    
    return token != null;
  }

}
