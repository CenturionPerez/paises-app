import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[
    `button{
      margin-right:5px;
    }`
  ]
})
export class PorRegionComponent {

    regiones: string[] = ['CARICOM','EFTA','EU','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
    regionActiva: string = '';
    paises: Country [] = [];
    hayError: boolean = false;

    constructor(private paisService : PaisService) { }

    getClaseCSS(region: string){//Usando ternarios
      return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
    }

    activarRegion(region: string) {
      if(region === this.regionActiva){return;}
      
      this.regionActiva = region;
      this.paises = [];
      const resp = this.paisService.buscarRegion(region).subscribe(paises => {
        this.paises = paises;
      },(err =>{
        this.hayError = true;
      }));

    }
}
