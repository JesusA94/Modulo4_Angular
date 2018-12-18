import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { PeliculaService } from './service/pelicula.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
