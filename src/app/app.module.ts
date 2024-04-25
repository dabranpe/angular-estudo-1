import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompCap5InputOutputComponent } from './comp-cap-5-input-output/comp-cap-5-input-output.component';
import { CompCap5ChildComponent } from './comp-cap-5-child/comp-cap-5-child.component';
import { CompCap5InitDestroyComponent } from './comp-cap-5-init-destroy/comp-cap-5-init-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    CompCap5InputOutputComponent,
    CompCap5ChildComponent,
    CompCap5InitDestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
