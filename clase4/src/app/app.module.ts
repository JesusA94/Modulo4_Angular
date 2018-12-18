import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeliculaService } from './servicios/pelicula.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
