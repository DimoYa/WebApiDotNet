import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProductModel, ProductModel } from '../models/product-model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private productEndpoint = 'api/Products';

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    // @Inject("BASE_URL") private baseUrl: string) { }
  ) {}

  getProducts$(): Observable<ProductModel[]> {
    let products = this.http.get<ProductModel[]>(this.productEndpoint);
    return products;
  }

  getProduct$(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.productEndpoint}/${id}`);
  }

  createProduct$(product: CreateProductModel): Observable<CreateProductModel> {
    return this.http.post<CreateProductModel>(`${this.productEndpoint}`, product);
  }

  updateProduct$(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.productEndpoint}`, product);
  }

  deleteProduct$(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productEndpoint}/${id}`);
  }
}
