import { Component } from '@angular/core';
import { products } from './products';
import { categories } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi.kz';
  categories;
  show = false;
  categoryName = "";
  products = products;
  isCategoryContainerVisible = true;
  constructor() {
    this.categories = categories;
  }
  categoryClick(name:string){
    if(this.categoryName == name){
      this.show = false;
      this.categoryName = "";
    }
    else{
      this.show = true;
      this.categoryName = name;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/