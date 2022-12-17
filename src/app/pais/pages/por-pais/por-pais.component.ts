import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  
  constructor(private paisService: PaisService){ }

    buscar(termino: string){
      this.hayError = false;
      this.termino = termino;
      console.log(this.termino);

      //Si ponemos dentro de suscribe un segundo parametro
      //suscribe((resp) 0=>{},(err)=>{}) en err ira el error controlado
      const resp = this.paisService.buscarPais(this.termino).subscribe( (paises) => {
        console.log(paises[0]);
        this.paises = paises;

      }, (err) =>{
        this.hayError = true;
        this.paises = [];
      });
    }

    sugerencias(termino: string){
      this.hayError = false;
    }

}
