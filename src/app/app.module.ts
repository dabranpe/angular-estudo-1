import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompCap5InputOutputComponent } from './comp-cap-5-input-output/comp-cap-5-input-output.component';
import { CompCap5ChildComponent } from './comp-cap-5-child/comp-cap-5-child.component';
import { CompCap5InitDestroyComponent } from './comp-cap-5-init-destroy/comp-cap-5-init-destroy.component';
import { CompCap6DirectivesComponent } from './comp-cap-6-directives/comp-cap-6-directives.component';
import { CustomDirectiveCap6Directive } from './custom-directive-cap-6.directive';
import { CompCap7DataBindingComponent } from './comp-cap-7-data-binding/comp-cap-7-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CompCap5InputOutputComponent,
    CompCap5ChildComponent,
    CompCap5InitDestroyComponent,
    CompCap6DirectivesComponent,
    CustomDirectiveCap6Directive,
    CompCap7DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
