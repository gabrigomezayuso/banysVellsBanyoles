import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  vacio:string;
  public contenido: string;

  constructor() { }

  ngOnInit(): void {
  }
  elegirAccion(accion) {
    //en caso de que la accion sea "anadir"
    if(accion.target.value == "cat") {
      //mostrara el contenido "anadir" y asi succesivamente
      this.contenido = "cat"
    } else if(accion.target.value == "cast") {
      this.contenido = "cast"
    } else if (accion.target.value == "eng") {
      this.contenido = "eng"
    }else if (accion.target.value == "fr") {
      this.contenido = "fr"
    } else {
      //en caso de no ser ninguna de las 3, se mostrara un espacio vacio
      this.vacio = "";
    }
  }


}
