import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';

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
  products: Product[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.productService.getProducts$().subscribe({
        next: (data: Product[]) => this.products = data,
        error: (error) => console.log(error, this.products),
        complete: () => console.log('Product retrieval complete')
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
