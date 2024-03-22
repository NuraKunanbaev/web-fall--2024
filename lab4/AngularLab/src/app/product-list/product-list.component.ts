import { Component } from '@angular/core';
import { products } from '../products';
import { Product } from '../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent {

  products = [...products];

  shareTelegram(products: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(products.link)}`;
    window.open(telegramUrl, '_blank');
  }
  
  shareWhatsapp(product: Product){
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product!')}%20${encodeURIComponent(product.link)}`;
    window.open(whatsappUrl, '_blank')
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
