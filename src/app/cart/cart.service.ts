import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = environment.apiUrl + 'cart';
  private apiCheckoutUrl = environment.apiUrl + 'checkout';

  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  removeItemFromCart(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + id);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.baseUrl);
  }

  checkOut(products: Product[]): Observable<void> {
    return this.http.post<void>(this.apiCheckoutUrl, products);
  }
}
