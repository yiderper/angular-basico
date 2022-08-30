import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Declaramos los componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Que cosa voy a hacer visible fuera de este modulo
    exports: [
        ListadoComponent
    ],
    // Van modulos 
    imports: [
       CommonModule  // Sirve para poder utilizar la directiva *ngFor y *ngIf
    ]
})

export class HeroesModule {}