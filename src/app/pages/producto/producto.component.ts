import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Proveedor } from 'src/app/models/Proveedor';
import { Venta } from 'src/app/models/Venta';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  displayedColumns: string[] = ['demo-position','demo-code', 'demo-name','demo-price', 'demo-proveedor'];
  productos : Producto[]=new Array;

 
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
    
  }

   /**
   * Obtiene los productos registrados para mostrarlos en la tabla
   */
   getProductos(){
    this.productoService.getProductos().subscribe((productosFromAPI: Producto[])=>{
      this.productos =productosFromAPI;
    },error =>console.error(error));
  }
}
