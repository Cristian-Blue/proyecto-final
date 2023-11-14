import { FormBuilder } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnChanges {

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
  ngOnChanges(){ 
    this.sp.getOne(this.id).subscribe((res : any)=>{
      this.producto = res;
      this.form.setValue({
        id:  res.id,
        title : res.title ,
        price: res.price,
        images : res.images[0],
        description : res.description,
      }) 
    })

  }

  enviar(){
    this.noModal.emit(false);
    
  }

  cerrar(){ 
    this.noModal.emit(false);
  }
}
