// product-list.component.ts
import { Component } from '@angular/core';
import { Product } from '../products'; // Исправленный импорт

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [...products]; // Используйте тип Product

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
