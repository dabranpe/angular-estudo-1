import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-cap-6-directives',
  templateUrl: './comp-cap-6-directives.component.html',
  styleUrl: '../app.component.css'
})
export class CompCap6DirectivesComponent {
  isVisible : boolean = true;

  isHighlighted : boolean = true;
  isItalic: boolean = true;

  textColor : string = 'purple';
  fontSize : number = 25;

  items : Array<string> = ['Item 1','Item 2', 'Item 3'];

  TurnVisible(){
    this.isVisible = !this.isVisible;
  }

  TurnItalic(){
    this.isItalic = !this.isItalic;
  }

  TurnHighlighted(){
    this.isHighlighted = !this.isHighlighted;
  }
}
