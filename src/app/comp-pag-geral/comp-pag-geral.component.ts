import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-pag-geral',
  templateUrl: './comp-pag-geral.component.html',
  styleUrl: '../app.component.css'
})
export class CompPagGeralComponent {
  title = 'angular-estudo-1';

  ExibirEsconderDiv(elemento : HTMLDivElement){
    if (elemento.style.display == 'none')
      elemento.style.display  = '';
    else
      elemento.style.display  = 'none';
  }
}
