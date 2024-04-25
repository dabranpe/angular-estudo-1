import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-estudo-1';

  ExibirEsconderDiv(elemento : HTMLDivElement){
    if (elemento.style.display == 'none')
      elemento.style.display  = '';
    else
      elemento.style.display  = 'none';
  }

}
