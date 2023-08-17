import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})

export class ContadorComponent {
  title = 'app-practice';
  base:number = 5;
  numero:number= 5
  acumular( tipoAcumulador:string){
    if(tipoAcumulador == 'suma')
      this.numero += this.base
    else
      this.numero -= this.base
       
  }
}
