import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-comp-cap-5-child',
  templateUrl: './comp-cap-5-child.component.html',
  styleUrl: './comp-cap-5-child.component.css'
})
export class CompCap5ChildComponent {
    @Input() message: string = "";
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    notifyParent(){
      this.notify.emit('Message from child component');
    }
}
