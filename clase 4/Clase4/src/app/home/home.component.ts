import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  VARIABLES QUE SE CONECTA CON EL BINDING DEL INPUT
  resultadoBusqueda: string;

  public peliculas: any[]

  constructor(private _peliculaSercive: PeliculaService) { }

  ngOnInit() {





  }

  /**
   * buscarPelicula
   */
  public buscarPelicula() {

    this._peliculaSercive.searchPeliculas(this.resultadoBusqueda).subscribe((result) => {
      console.log(result)
      if(result.Response){
        this.peliculas = result.Search
      }
    })
  }

}
