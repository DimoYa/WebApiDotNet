import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  createProduct(): void {

    const body = this.productForm.value;
    this.subscription.add(this.productService.createProduct$(body).subscribe(() => {
      this.router.navigate(['/product-list']);
    }));
  }

  get f() {
    return this.productForm.controls;
  }

  get invalid() {
    return this.productForm.invalid;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}