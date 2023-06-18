import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-empleado',
  //Estilo inline en lugar de url. Lo recomendable es en archivos separados
  //template:"<p>Aquí iria un empleado</p>",
  templateUrl: './empleado.component.html',
  styleUrls:["./empleado.component.css"]
  //Estilo inline
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre="Juan";
  apellido="Díaz";
  edad=28;
  habilitacionCuadro=false;
  empresa="Google";
  usuRegistrado=true;
  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }
  getEdad(){
    return this.edad;
  }
  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar");

    //this.textoDeRegistro="El usuario se acaba de registrar";
    if ((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }
    else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }


  constructor(){}
  ngOnInit(): void {
    
  }
}
