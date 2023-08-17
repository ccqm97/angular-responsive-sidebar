import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProductoCantidad } from '../models/Producto';
import { Venta } from '../models/Venta';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseURL = environment.apiURL + 'producto/';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    const url = this.baseURL +"all";
    return this.http.get<Producto[]>(url);
  }

  getVentas(): Observable<ProductoCantidad []>{
    const url = this.baseURL +"ventas";
    return this.http.get<ProductoCantidad[]>(url);
  }
}
