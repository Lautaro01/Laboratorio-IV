import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPais {

  getPaises() {

    let paises = this.http.get('https://restcountries.eu/rest/v2/region/americas');

    return paises;
  }

  constructor( private http: HttpClient) { }
}
