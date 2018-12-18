import { Component, OnInit } from '@angular/core';
import { Cursos } from './cursos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //VARIABLES
  title = 'clase2';
  mostrarCursos = true;
  Cursos: Cursos[] = [];
  nombre:string
  

  //CONSTRUCTOR
  constructor() {
    // for (let i = 0; i < 10; i++) {
    //   this.Cursos.push(new Cursos("curso" + i, i));
    // }

    // console.log(this.Cursos)

  }

  //ONINIT
  ngOnInit(): void {
    // this.button = document.getElementById("cambiarValorBtn");
    // console.log(this.button)
    // this.button.addEventListener("click", this.mostrar);

  }



  //FUNCIONES

  public mostrar() {
    console.log("entre");
    this.mostrarCursos = !this.mostrarCursos;
    console.log(this.mostrarCursos)
  }

  /**
   * mostrarAlert
   */
  public mostrarAlert(curso:Cursos) {
    for (let i = 0; i < this.Cursos.length; i++) {
      if(curso.nombreCurso === this.Cursos[i].nombreCurso){
        console.log(curso.nombreCurso + ", en la posicion"+i)
        this.Cursos.splice(i);
      }
      
    }
  }

  /**
   * name
   */
  public agregarCurso() {
    let nombre = prompt("Nombre del Curso");
    console.log(nombre);
    let valor = prompt("Valor del curso");
    console.log(valor)
    this.Cursos.push(new Cursos(nombre, Number.parseInt(valor)));

    // this.agregarArray(new Cursos(nombre, valor));

  }

  /**
   * agregarArray
   */
  public agregarArray(curso:Cursos) {
    this.Cursos.push(curso);
    
  }






}
