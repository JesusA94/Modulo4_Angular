import { OnInit, Component } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  //  VARIABLE QUE ALMACENARA EL PARAMETRO ID
  private idParametro: string;

  // VARIABLE QUE ALMACENA LA PELICULA QUE NOS RETORNA EL SERVICIO
  public pelicula: any;

  constructor(private _peliculaService: PeliculaService, private parametros: ActivatedRoute) { }

  ngOnInit() {
    //RECIBO EL PARAMETRO
    this.idParametro = this.parametros.snapshot.paramMap.get('id')

    //LLAMO AL SERVICIO PARA QUE ME RETORNE LA PELICULA POR SU ID
    this.pelicula = this._peliculaService.getPeliculasById(this.idParametro)

  }

}
