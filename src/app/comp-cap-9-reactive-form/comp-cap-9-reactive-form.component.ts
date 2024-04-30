import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp-cap-9-reactive-form',
  templateUrl: './comp-cap-9-reactive-form.component.html',
  styleUrl: '../app.component.css'
})
export class CompCap9ReactiveFormComponent  {

  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }

  productForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    price: new FormControl<number | undefined>(undefined, { nonNullable: true })
  });




  createProduct() {
    /*
    this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
      this.productForm.reset();
      this.added.emit(product);
    });
    */
    alert("Produto " + this.name.value + this.price.value);
  }


}
