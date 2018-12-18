import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id:string
  constructor(private parametros:ActivatedRoute) { }

  ngOnInit()
  {
    this.id=this.parametros.snapshot.paramMap.get("id")
    console.log(this.id)
  }

}
