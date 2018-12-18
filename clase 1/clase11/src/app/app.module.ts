import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
