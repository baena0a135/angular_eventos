import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';



@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() eventoHijo: IEvento;
  @Output() eliminar = new EventEmitter<void>();

  //@Input() showImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvento(){
    this.eliminar.emit();
  }

}
