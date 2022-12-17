import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Country } from '../interfaces/pais.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor( private http: HttpClient) { }
  
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
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
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getCountryById(countryId: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${countryId}`;
    return this.http.get<Country[]>(url);
  }

}
