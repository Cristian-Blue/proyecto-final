import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ThisReceiver } from '@angular/compiler';
import { ModalConfig } from 'src/app/interface/modal-config';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private service : ServiceService){}

  open = {editar: false, eliminar: false, agregar: false};
  id = 0 ;
  elementos :  ProductoInterface[] = [];
  
  cerrarModal(valor : boolean, item: 'editar'| 'eliminar' | 'agregar'){
    this.open[item] = valor
  }
  
  onModal( a: ModalConfig ){
    this.id = a.id;
    this.open[a.tipo] = a.active;
  }

  ngOnInit() : void{
    this.service.getAll().subscribe(
      (res :any)=>{
        this.elementos = res;
      } , 
      (ERR :any)=> {
        console.log("error");
      },
      ()=>{
        console.log("finis");
      }

    );
    
  }
}
