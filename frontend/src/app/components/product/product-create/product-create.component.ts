import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) { }

  product: Product = {
    name: 'Notebook de teste',
    price: 125.98
  }

  ngOnInit(): void {
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
    
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
