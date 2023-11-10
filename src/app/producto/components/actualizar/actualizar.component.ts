import { ServiceService } from './../../service.service';
import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnChanges {

  constructor(private sp : ServiceService){}
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

  ngOnChanges(){ 
    this.sp.getOne(this.id).subscribe((res : any)=>{
      this.producto = res;
    })

  }

  cerrar(){ 
    this.noModal.emit(false);
  }
}
