import { ServiceService } from './../../service.service';
import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent {
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

  cerrar(){ 
    this.noModal.emit(false);
  }

}
