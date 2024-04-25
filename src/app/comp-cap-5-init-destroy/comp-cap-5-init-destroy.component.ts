import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-cap-5-init-destroy',
  templateUrl: './comp-cap-5-init-destroy.component.html',
  styleUrl: '../app.component.css'
})
export class CompCap5InitDestroyComponent implements OnInit, OnDestroy {
  message !: string;

  ngOnInit(): void {
    this.message = 'Component initialized';
    console.log(this.message);
  }

  ngOnDestroy(): void {
    this.message = 'Component destroyed';
    console.log(this.message);
  }
}
