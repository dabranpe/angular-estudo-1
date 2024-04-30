import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-cap-10-routing-2',
  templateUrl: './comp-cap-10-routing-2.component.html',
  styleUrl: './comp-cap-10-routing-2.component.css'
})
export class CompCap10Routing2Component {

  valorDoId: string = "";

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(params => {

      this.valorDoId = params['id'];

    })
  }
}
