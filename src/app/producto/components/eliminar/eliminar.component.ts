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
  constructor(private sp : ServiceService){}

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

  ngOnChanges(){ 
    this.sp.getOne(this.id).subscribe((res : any)=>{
      this.producto = res;
    })

  }
}
