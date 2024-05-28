import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
}

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

  getProducts$(): Observable<Product[]> {
    let products = this.http.get<Product[]>(this.productEndpoint);
    return products;
  }

  getProduct$(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productEndpoint}/${id}`);
  }

  createProduct$(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.productEndpoint}`, product);
  }

  updateProduct$(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.productEndpoint}`, product);
  }

  deleteProduct$(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productEndpoint}/${id}`);
  }
}
