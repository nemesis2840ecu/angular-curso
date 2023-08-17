import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = []
  heroeEliminado:string = ''
  constructor(){
    this.heroes = ['ElPepe','Spiderman','Hulk']
  }

  eliminarHeroe(){
    this.heroeEliminado = this.heroes.shift() || ''
  }

}
