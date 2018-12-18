import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  //  ARRAY PARA ALMACENAR LAS PELICULAS QUE TRAE LA API
  private peliculas: any[];


  /**
   * RECUERDEN QUE PARA VER LA API Y SU USO ENTREN A
   *  http://www.omdbapi.com
   */

  //  VARIABLES PARA ALMACENAR LA 'RUTA' DE LA API Y LA 'APIKEY'
  private path: string = 'http://www.omdbapi.com';
  private apikey: string = '4eff56e'; // RECUERDEN USAR SU APIKEY

  // INYECTO EL HTTPCLIENT POR EL CONSTRUCTOR PARA PODER USAR LAS PETICIONES HTTP
  constructor(private http: HttpClient) {


    // INICIALIZO EL ARRAY
    this.peliculas = []






  }


  // METODO PARA HACER UNA BUSQUEDA DE UNA PELICULA POR SU NOMBRE
  public searchPeliculas(busqueda) {

    /*  METODO LARGO PARA COLOCAR LOS PARAMETROS NECESARIOS PARA LA PETICION */

    return this.http.get(this.path, {
      params: new HttpParams({
        fromObject: {
          ['apikey']: this.apikey,
          ['s']: busqueda

        }
      })
    }).pipe( // EL 'PIPE' SIRVE PARA PERMITIR EL USO DEL 'TAP' Y EL 'MAP'

    //EL 'TAP' SIRVE PARA PODER ACCEDER A LA DATA QUE VENGA DE LA API SIN HACER SUSCRIBE,
    // EN ESTE CASO SOLO PODEMOS LEER LA INFORMACION MAS NO PODEMOS EDITARLA, A DIFERENCIA DEL MAP QUE SI LO PERMITE
      tap((result:any)=>{
        if(result.Response){
          // AGREGAMOS EL RESULTADO AL ARRAY PARA QUE CUANDO USEMOS EL METODO DE GETPELICULA POR ID TENGAMO EL ARREGLO LLENO
          this.peliculas = result.Search
        }
      })
    )

    /*  METODO CORTO A TRAVES DE CONCATENAR STRING EN LA URL*/
    // return this.http.get(this.path + '?apikey=' + this.apikey + '&s=' + busqueda)
  }

  //OBTENEMOS UNA PELICULA SEGUN SU ID
  getPeliculasById(id) {
    for (const i of this.peliculas) {
      if (i.imdbID === id) {
        return i
      }
    }
  }



}
