import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Subscription } from 'rxjs';
import { ProductModel } from '../../../core/models/product-model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: ProductModel;
  @Output() productEmitter = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  deleteProduct(id: number): void {
    this.productService.deleteProduct$(id).subscribe(() => {
      this.productEmitter.emit();
    });
  }
}