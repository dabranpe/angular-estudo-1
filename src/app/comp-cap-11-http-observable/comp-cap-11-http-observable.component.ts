import { Subscription } from 'rxjs';
import { ServiceCap11Data1Service } from './../services/service-cap-11-data-1.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-cap-11-http-observable',
  templateUrl: './comp-cap-11-http-observable.component.html',
  styleUrl: './comp-cap-11-http-observable.component.css'
})
export class CompCap11HttpObservableComponent implements OnInit, OnDestroy {

  data:any;
  subscription!: Subscription;

  constructor(private service: ServiceCap11Data1Service){
    this.subscription = this.service.fetchData()
    .subscribe(response => {  this.data = response.data; console.log(response.data);})

    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  

}
