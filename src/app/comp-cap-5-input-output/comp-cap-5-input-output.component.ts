import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-cap-5-input-output',
  templateUrl: './comp-cap-5-input-output.component.html',
  styleUrl: '../app.component.css'
})
export class CompCap5InputOutputComponent {

  contador : number = 0;
  parentMessage : string = "Parent Message"

  onNotify(mensagemEvento: string){
    this.contador++;
    this.parentMessage = "Clicou" + this.contador;
    console.log(mensagemEvento + this.contador);
  }
}
