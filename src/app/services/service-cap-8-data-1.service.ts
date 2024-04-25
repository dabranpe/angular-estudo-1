import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCap8Data1Service {

  constructor() { }

  getData() : string {
    return 'Data from DataService';
  }
}
