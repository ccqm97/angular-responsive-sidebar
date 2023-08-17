export interface Producto {
    Numero: number;
    Descripcion: string;
    CodigoBarras: string;
    PrecioVenta: number;
    PrecioVentaOriginal: number;
    PrecioCompra: number;
    Cantidad: number;
  }
  
  export interface ProductoCantidad {
    Producto: Producto;
    Cantidad: number;
  }