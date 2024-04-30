import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-cap-10-routing',
  templateUrl: './comp-cap-10-routing.component.html',
  styleUrl: './comp-cap-10-routing.component.css'
})
export class CompCap10RoutingComponent {

  constructor(private router: Router){}

  navigateToCap10_2(){
    this.router.navigate(['/cap10_2/53']);
  }

}
