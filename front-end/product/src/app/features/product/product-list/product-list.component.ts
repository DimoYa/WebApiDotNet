import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { ProductModel } from '../../../core/models/product-model';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.subscription.add(
      this.productService.getProducts$().subscribe({
        next: (data: ProductModel[]) => this.products = data.sort((a, b) => b.id - a.id),
        error: (error) => console.log(error),
        complete: () => console.log('Product retrieval complete')
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
