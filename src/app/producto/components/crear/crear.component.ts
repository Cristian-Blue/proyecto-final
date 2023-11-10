import { ServiceService } from './../../service.service';
import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  elemento ?: ProductoInterface ;

  @Input() id : number = 0 ;
  producto : ProductoInterface = {
    id:  0,
    title : '' ,
    price: 0,
    images :[],
    description : '',
  };
  @Output() noModal  = new EventEmitter<boolean>(); 
}
