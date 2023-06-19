import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Registro de usuarios";
  mensaje = "";  
  registrado = false;
  nombre:String='';
  apellido:String='';
  //entradas : Array<Record<string,any>>=[];
  entradas:any;
 
  constructor(){
    this.entradas = [
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript más potente que nunca"},
      {titulo:"Kotlin y tus mejores apps"},
      {titulo:"¿Qué se sabe de Pascal?"}
    ]
  

  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado correctamente con el nombre de: " + this.nombre+" "+ this.apellido;
  }
}
