import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { EventosService } from '../services/eventos.service';


@Component({
  selector: 'event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  public titulo:string ="Mis Eventos";
  eventos: IEvento[];

   search:string="";

  constructor(private events: EventosService) { }

  ngOnInit(): void {
    this.eventos = this.events.getEventos();
  }
  orderDate(){
    this.search="";
    this.eventos.sort((evento1,evento2)=>
     evento1.date.split('').reverse().join('')
    <evento2.date.split('').reverse().join('')? -1:1);
  }
  orderPrice(){
    this.search="";
    this.eventos.sort((evento1,evento2) => evento1.price < evento2.price? -1:1);
  }

  addEvento(nuevoEvento: IEvento){
    this.eventos.push(nuevoEvento);
  }

  eliminarEvento(evento: IEvento){
    this.eventos= this.eventos.filter(function(elemento){
      return elemento!=evento;
    });

  }

}
