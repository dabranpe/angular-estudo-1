import { Component } from '@angular/core';
import { ServiceCap8Data1Service } from '../services/service-cap-8-data-1.service';

@Component({
  selector: 'app-comp-cap-8-services-di',
  templateUrl: './comp-cap-8-services-di.component.html',
  styleUrl: './comp-cap-8-services-di.component.css'
})
export class CompCap8ServicesDiComponent {
  data !: string;

  constructor(private dataService: ServiceCap8Data1Service){
    this.data = this.dataService.getData();
  }
}
