import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../servicios/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public resultadoBusqueda; // Variable del input de busqueda del HTML
 public peliculas: string[];

  constructor(private _peliculaService: PeliculaService) { }

  ngOnInit() {

  // this.peliculas=this._peliculaService.getPeliculas();
  }
  buscarPelicula()
  {
    this._peliculaService.getPeliculas(this.resultadoBusqueda).subscribe((result: any) => {
      if (result.Response)
      {
        this.peliculas = result.Search;
      }






      console.log(result.Search)
    })

  }

}
