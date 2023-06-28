import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  nombre:string='';
  apellido:string='';
  cargo:string='';
  salario:number=0;

//Creamos un array
  empleados:Empleado[]=[
  new Empleado("Ignacio","Rueda","Presidente",7500),
  new Empleado("Paco","García","J.Sección",6500),
  new Empleado("María","Delgado","Gerente",3500),
  new Empleado("Julia","Serrano","Vicepresidente",2500),
  new Empleado("Laura","Madrigal","Rectora",6500),
  
];
agregarEmpleado(){

  let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  this.empleados.push(miEmpleado);
}
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;




}
