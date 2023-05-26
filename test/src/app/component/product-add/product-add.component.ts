import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';
import { ProductServiceService } from 'src/app/service/product-service.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(private fb: FormBuilder, private ps: ProductServiceService) { }
  productForm = this.fb.group({
    name: ['', [Validators.required]],
    price: [0]
  })
  addProduct(){
    if(this.productForm.valid){
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
      }
   
    this.ps.addProduct(product).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
}
