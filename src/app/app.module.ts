import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompCap5InputOutputComponent } from './comp-cap-5-input-output/comp-cap-5-input-output.component';
import { CompCap5ChildComponent } from './comp-cap-5-child/comp-cap-5-child.component';
import { CompCap5InitDestroyComponent } from './comp-cap-5-init-destroy/comp-cap-5-init-destroy.component';
import { CompCap6DirectivesComponent } from './comp-cap-6-directives/comp-cap-6-directives.component';
import { CustomDirectiveCap6Directive } from './directives/custom-directive-cap-6.directive';
import { CompCap7DataBindingComponent } from './comp-cap-7-data-binding/comp-cap-7-data-binding.component';
import { CompCap8ServicesDiComponent } from './comp-cap-8-services-di/comp-cap-8-services-di.component';
import { CompCap9TemplateDrivenFormComponent } from './comp-cap-9-template-driven-form/comp-cap-9-template-driven-form.component';
import { CompCap9ReactiveFormComponent } from './comp-cap-9-reactive-form/comp-cap-9-reactive-form.component';
import { CompCap10RoutingComponent } from './comp-cap-10-routing/comp-cap-10-routing.component';
import { CompPagGeralComponent } from './comp-pag-geral/comp-pag-geral.component';
import { CompCap10Routing2Component } from './comp-cap-10-routing-2/comp-cap-10-routing-2.component';

@NgModule({
  declarations: [
    AppComponent,
    CompCap5InputOutputComponent,
    CompCap5ChildComponent,
    CompCap5InitDestroyComponent,
    CompCap6DirectivesComponent,
    CustomDirectiveCap6Directive,
    CompCap7DataBindingComponent,
    CompCap8ServicesDiComponent,
    CompCap9TemplateDrivenFormComponent,
    CompCap9ReactiveFormComponent,
    CompCap10RoutingComponent,
    CompPagGeralComponent,
    CompCap10Routing2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
