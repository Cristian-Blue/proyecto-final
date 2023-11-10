import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalConfig } from 'src/app/interface/modal-config';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent { 
  @Input() id : number= 0;
  @Output() onModal = new EventEmitter<ModalConfig>(); 
 
  activeModal(tipo : 'editar'| 'eliminar' | 'agregar'){
    this.onModal.emit({active : true , tipo :tipo, id  :this.id});
  }

}
