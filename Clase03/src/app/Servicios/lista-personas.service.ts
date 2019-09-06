import { Injectable } from '@angular/core';
import { Persona } from '../Clases/persona';

@Injectable({
  providedIn: 'root'
})
export class ListaPersonasService {

  lista : Persona[] = [];

  constructor() { }

  public getLista() : Persona[]
  {
    return this.lista;
  }

  public setObjInLista(persona: Persona)
  {
    console.log("AAAAAAAAAAAA " + persona);
    this.lista.push(persona);
  }
}
