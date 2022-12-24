import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Country } from '../interfaces/pais.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com";
  private version1: string = "v3.1";
  private version2: string = "v2";

  constructor( private http: HttpClient) { }
  
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/${this.version2}/name/${ termino }`;
    return this.http.get<Country[]>( url );
      //USANDO PIPES
      //.pipe(catchError( err => of([]))
        //Tenemos que regresar un observale para ello usaremos of([])
        //Esto devuelve un observale y sirve para gestionar y controlar errores
        //Dentro podemos poner lo que queramos como argumentos --> of(["Ocurrio un error"])
        //para suarlo tenemos que importar --> import { catchError } from "rxjs/operators";
      //);
  }

  buscarCapital(termino: string): Observable<Country []>{
    const url = `${this.apiUrl}/${this.version2}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getCountryById(countryId: string): Observable<Country[]>{
    const url = `${this.apiUrl}/${this.version1}/alpha/${countryId}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country []>{
    const url = `${this.apiUrl}/${this.version2}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url);
  }

  //Permite crear parametros para que viajen en el endpoint
  // get params() :HttpParams{
  //   return new HttpParams().set('fields','name,capital,alphacode');
  // }

}
