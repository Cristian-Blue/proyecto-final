import { ProductoInterface } from './../interface/producto-interface';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}
  
  baseUrl = environment.api +"/products";
 
  getAll() : Observable<any>{
    return this.http.get(this.baseUrl)
  }

  getOne(id : number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  postProducto(){

  }

  putProducto(){

  }

  deleteProducto(){

  }


}
