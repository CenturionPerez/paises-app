import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
    //ActivatedRoute viene con todo lo necesario para suscribirnos a cualquier cambio de la url
    constructor(private activatedRoute: ActivatedRoute, private paisService:PaisService) { }

    pais!: Country; //Con exclamacion al final de la variable indicamos que puede ser nulo y no se queje

    //OPCION 1 - NGONINIT CON ACTIVATEDROUTE Y SUSCRIBE
    /* ngOnInit(){//ngOnInit es una funcion que se ejecuta nada mas se ejecute el componente
      this.activatedRoute.params//Con esto conseguimos que se quede observando cualquier cambio de url
      .subscribe(params =>{
        console.log(params);

        //Siempre que queramos informacion de algun tipo debemos de suscribirnos
        this.paisService.getCountryById(params["countryId"]).subscribe(
          (pais) => {
            console.log(pais[0].name.common);
          })
      })
    } */
    //OPCION 2 - NGONINIT CON ACTIVATEDROUTE Y SWITCHMAP
    ngOnInit(){
      this.activatedRoute.params
      .pipe(//Podemos definir la cantidad de operadores que necesitemos para trabajar con el observable
      //switchMap es un operador muy importante de rxjs, permite recibir un observable y devolver un observable
      //En este caso, recibira param un obersable de activatedRoute y obtendra otro observable con la respuesta
        switchMap( (param) => this.paisService.getCountryById(param["countryId"])),
        tap(console.log)//El tap su funcion es imprimir unicamente lo que responda por consola
      )
      .subscribe( pais => this.pais = pais[0])
    }
}
