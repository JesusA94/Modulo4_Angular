import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url = 'http://www.omdbapi.com';
  private key = '4eff56e';
  // private nombrePeliculas:string[];

  constructor(private http: HttpClient) {

   // this.nombrePeliculas=["Avengers","Thor","Deadpool","la monja"]
   }


   public getPeliculas(busqueda)
  {
    return this.http.get(`${this.url}?apikey=${this.key}&s=${busqueda}`);
  // return this.nombrePeliculas;
  }



  /* public getPeliculasOtraForma()
  {
    return this.http.get();
  // return this.nombrePeliculas;
  }*/



}



