import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Superman','Goku','Semana', 'Capitan America'];
  heroeBorrado: string='';

  borrarHeroe(){
    console.log('Borrando..');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Heroe Borrado ',this.heroeBorrado);
  }

}
