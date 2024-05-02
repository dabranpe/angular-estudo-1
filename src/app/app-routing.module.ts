import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompCap10RoutingComponent } from './comp-cap-10-routing/comp-cap-10-routing.component';
import { CompPagGeralComponent } from './comp-pag-geral/comp-pag-geral.component';
import { CompCap10Routing2Component } from './comp-cap-10-routing-2/comp-cap-10-routing-2.component';
import { CompCap11HttpObservableComponent } from './comp-cap-11-http-observable/comp-cap-11-http-observable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CompPagGeralComponent },
  { path: 'cap10', component: CompCap10RoutingComponent },
  { path: 'cap10_2/:id', component: CompCap10Routing2Component },
  { path: 'cap11', component: CompCap11HttpObservableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
