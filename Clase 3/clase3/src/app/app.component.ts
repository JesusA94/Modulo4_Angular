import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('email')
  public formularioPrueba;



  ngOnInit(): void {
    console.log(this.formularioPrueba)
  }
  

  title = 'clase3';
  nombre = ""
  apellido = ""
  direccion = ""
}
