import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';


@Component({
  selector: 'product-event',
  templateUrl: './product-event.component.html',
  styleUrls: ['./product-event.component.css']
})
export class ProductEventComponent implements OnInit {

  public titulo:string ="Mis Eventos";
  public eventos:IEvento[] = [{
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
   search:string="";


  constructor() { }

  newEvento:IEvento={
    title: '',
    image: "",
    description:"",
    date:"",
    price:0
};

  ngOnInit(): void {
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

  addEvento(){
    this.eventos.push(this.newEvento);

    this.newEvento ={
      title: '',
      image: "",
      description:"",
      date:"",
      price:0
    }
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result.toString();
    });
  }

}
