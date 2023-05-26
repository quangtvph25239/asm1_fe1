import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[] = []
  product!: IProduct
  

  constructor (private ProductService: ProductServiceService){
    this.ProductService.getProducts().subscribe(data => {
      this.products = data
      console.log(data);
      
    })
  }

  removeProduct(id:any){
      this.ProductService.deleteProduct(id).subscribe(()=>{
        this.products = this.products.filter(item => item.id !==id)
      }) 

  }
}
