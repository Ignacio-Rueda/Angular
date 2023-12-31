import { Component,HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit{
  contaClick:number=0;
  contaOver:number=0;

  @Input() miAtributo:string='';

  ngOnInit(){
    console.log(this.miAtributo);
  }

  @HostListener('click',['$event'])
  
  onHostClick(event:Event){
    console.log("Click en app"+event);
    this.contaClick+=1;
  }
  @HostListener('mouseover',['$event'])

  onMouseOver(event:Event){
    console.log("mouseover"+event);
    this.contaOver+=1;
  }
}
