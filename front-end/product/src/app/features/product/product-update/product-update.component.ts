import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product-model';
import { ProductService } from '../../../core/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {

  productId!: number;
  product!: ProductModel;
  subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {

  }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((data) => {
        this.productId = data['id'];
        this.productService.getProductById$(this.productId).subscribe((data) => {
          this.product = data;
        });
      })
    );
  }

  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required]
  });

  editProduct(): void {
    this.subscription.add(
      this.productService.updateProduct$(this.product).subscribe(() => {
        this.router.navigate([`/product-list`]);
      }));
  }

  get f() {
    return this.productForm.controls;
  }

  get invalid() {
    return this.productForm.invalid;
  }
}
