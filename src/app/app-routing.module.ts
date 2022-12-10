import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {//Cada objeto y path simboliza una ruta de las diferentes pages

        path: '',//Ruta componente principal, no ponemos nada en path-->http://localhost:4200/
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',//http://localhost:4200/region
        component: PorRegionComponent
    },
    {
        path:'capital',//http://localhost:4200/capital
        component: PorCapitalComponent
    },
    {
        path:'pais/:codigoPais',//http://localhost:4200/pais/variabelDinamicaCodigoPais
        component: VerPaisComponent
    },
    {
        path: '**', //Si no pone una pagina que no existe le redireccionamos a la principal
        redirectTo: ''//Aqui ponemos a la principal '' pero hay gente que pone 404Component etc
    }

]

@NgModule({
    imports:[
        //RouterModule lo debemos importar porque realizara la configuracion automatica de mis rutas
        //Debemos usar dentro de el forRoot porque no tenemos rutas hijas y le damos las rutas que tenemos preparadas
        RouterModule.forRoot(routes)
    ],
    exports:[
        //Lo exportamos para utilizarlo desde fuera
        RouterModule
    ]
})
export class AppRoutingModule {}