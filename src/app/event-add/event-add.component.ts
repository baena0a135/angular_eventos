import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  @Output() anadir = new EventEmitter<IEvento>();
  newEvento:IEvento={
    title: '',
    image: "",
    description:"",
    date:"",
    price:0
};
  search:string="";

  constructor() { }

  ngOnInit(): void {
  }



  addEvento(){
    this.anadir.emit(this.newEvento);
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
