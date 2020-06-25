import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../producto.service";
import $ from 'jquery';

@Component({
  selector: 'app-productoslist',
  templateUrl: './productoslist.component.html',
  styleUrls: ['./productoslist.component.css']
})
export class ProductoslistComponent implements OnInit {

  productos:any;

  editProducto = {
    id_producto:undefined,
    descripcion:"",
    precio:undefined,
  };

  addProducto = {
    id_producto:undefined,
    descripcion:"",
    precio:undefined,
  }

  constructor(private ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos() {
    this.ProductoService.getProductos().subscribe(
      result => {
        this.productos = result;
        //console.log(this.stock);
      }
      );
  }
  editarProducto(id:number, descripcion:string, precio:number) {
    this.editProducto.id_producto=id;
    this.editProducto.descripcion=descripcion;
    this.editProducto.precio=precio;
    $('#editarProducto').fadeIn();
  }
  productoEditado() {
    //console.log(this.editStock)
    this.editProducto.id_producto=Number(this.editProducto['id_producto']);
    this.editProducto.precio=Number(this.editProducto['precio']);
    this.ProductoService.editarProducto(this.editProducto).subscribe(()=>{
      this.mostrarTodos();
      $('.txt_result').text('Producto editado correctamente');
      $('.alert').css('background', 'rgba(0, 0, 255, 0.2)');
      $('.alert').slideDown();
      setTimeout(()=>{ $('.alert').slideUp(); }, 3000);
    });
    //this.mostrarTodos();
  }
  agregarProducto(){
    this.addProducto.id_producto=Number(this.addProducto['id_producto']);
    this.addProducto.precio=Number(this.addProducto['precio']);
    this.ProductoService.agregarProducto(this.addProducto).subscribe(()=>{
      this.mostrarTodos();
      this.addProducto = { id_producto:undefined, descripcion:"", precio:undefined, };
      $('.txt_result').text('Producto agregado correctamente');
      $('.alert').css('background', 'rgba(0, 255, 0, 0.2)');
      $('.alert').slideDown();
      setTimeout(()=>{ $('.alert').slideUp(); }, 3000);
    });
  }
  fadeInAddProducto() {
    $('#agregarProducto').fadeIn();
  }

}
