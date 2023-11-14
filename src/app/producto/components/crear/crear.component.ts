import { ServiceService } from './../../service.service';
import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  constructor(private sp : ServiceService, private fb : FormBuilder){}

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

  form = this.fb.group({
    id:  [0],
    title : [''] ,
    price: [0],
    images : [''],
    description : [''],
  });

  
  cerrar(){ 
    this.noModal.emit(false);
  }

  enviar(){
    this.noModal.emit(false);

  }
}
