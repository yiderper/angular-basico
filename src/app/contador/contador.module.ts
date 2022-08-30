//1ro  importamos el NgModule
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContadorComponent } from "./contador/contador.component";


// 3ro Cramos el decorado
@NgModule({
    // Declaramos los componentes
    declarations: [
        ContadorComponent //4to Unico cmopoarto 
    ],

    exports: [
        ContadorComponent //5to Exortamos 
    ],

    // Von los modulos
    imports: [
        //CommonModule
    ]    
})

// 2do. Creamos la clase y la exportamos
export class ContadorModule {}

//6to vamos al modulo principal app.module.ts