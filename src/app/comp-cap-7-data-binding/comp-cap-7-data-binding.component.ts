import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-cap-7-data-binding',
  templateUrl: './comp-cap-7-data-binding.component.html',
  styleUrl: '../app.component.css'
})
export class CompCap7DataBindingComponent {
  name : string = "Exemplo Interpolação";
  isDisable: boolean = true;


  onClick(){
    alert("Clicou");
  }
}
