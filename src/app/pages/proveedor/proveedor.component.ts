import { Component, OnInit } from '@angular/core';
import { ProductoCantidad } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  displayedColumns: string[] = ['demo-price','demo-code', 'demo-name', 'demo-proveedor'];
  datos: ProductoCantidad[] = [];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.getVentas();
  }

   /**
   * Obtiene los productos registrados para mostrarlos en la tabla
   */
   getVentas(){
    this.productoService.getVentas().subscribe((ventasFromAPI: ProductoCantidad[])=>{
      this.datos =ventasFromAPI;
    },error =>console.error(error));
  }

}
