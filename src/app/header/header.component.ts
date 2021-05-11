import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

grito = "ME VIOLENTAN";
silen = "ME ROBAN";
mensaje = "¿ESPERANZA?";
mensaje2 = "¿SOLUCION?"

   constructor() { }

  ngOnInit(): void {
  }

  gritar(){
    alert(this.grito);
    this.grito;

  }
  silencio(){
    alert(this.silen);
    this.silen;

  }
  verde(){
    alert(this.mensaje);
    this.mensaje;
  }

  verde2(){
    alert(this.mensaje2);
    this.mensaje2;
  }

}
