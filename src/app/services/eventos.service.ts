import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor() { }
 getEventos(): IEvento[] {
   return [{
    title: 'Evento Fito',
    image: 'assets/Imagen_Automatico.jpg',
    description: 'Evento de Fito en mi casa',
    date: "01-12-2024",
    price: 20.65
  }, {
    title: 'Evento de Linkin-Park',
    image: 'assets/Imagen_manual.jpg',
    description: 'Evento de Linkin-Park en casa de tu puta madre',
    date: "25-10-2023",
    price: 65.32
  }];
}

}
