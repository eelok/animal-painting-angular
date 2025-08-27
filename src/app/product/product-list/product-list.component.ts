import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProduct: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProduct = this.products;
    });

  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    this.filteredProduct = this.products.filter(
      product => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

}
