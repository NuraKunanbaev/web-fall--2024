// src/main.ts
import * as __NgCli_bootstrap_1 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_platform-browser.js?v=b6c84ebb";

// src/app/app.module.ts
import { NgModule } from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";
import { BrowserModule } from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_platform-browser.js?v=b6c84ebb";
import { RouterModule } from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_router.js?v=b6c84ebb";
import { ReactiveFormsModule } from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_forms.js?v=b6c84ebb";

// src/app/app.component.ts
import { Component as Component2 } from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";
import * as i02 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";
import * as i12 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_router.js?v=b6c84ebb";

// src/app/top-bar/top-bar.component.ts
import { Component } from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";
import * as i0 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";
import * as i1 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_router.js?v=b6c84ebb";
var _c0 = () => ["/"];
var _TopBarComponent = class _TopBarComponent {
};
_TopBarComponent.\u0275fac = function TopBarComponent_Factory(t) {
  return new (t || _TopBarComponent)();
};
_TopBarComponent.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _TopBarComponent, selectors: [["app-top-bar"]], decls: 7, vars: 2, consts: [[3, "routerLink"], [1, "button", "fancy-button"], [1, "material-icons"]], template: function TopBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "a", 0)(1, "h1");
    i0.\u0275\u0275text(2, "My Store");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(3, "a", 1)(4, "em", 2);
    i0.\u0275\u0275text(5, "shopping_cart");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(6, "Checkout");
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i0.\u0275\u0275property("routerLink", i0.\u0275\u0275pureFunction0(1, _c0));
  }
}, dependencies: [i1.RouterLink], styles: ["\n\n/*# sourceMappingURL=top-bar.component.css.map */"] });
var TopBarComponent = _TopBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(TopBarComponent, { className: "TopBarComponent" });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, ""]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "app-top-bar");
    i02.\u0275\u0275elementStart(1, "div", 0);
    i02.\u0275\u0275element(2, "router-outlet")(3, "div", 1);
    i02.\u0275\u0275elementEnd();
  }
}, dependencies: [i12.RouterOutlet, TopBarComponent], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/app/product-list/product-list.component.ts
import { Component as Component3 } from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";

// src/app/products.ts
var products = [
  {
    image: ["../assets/images/download.jpeg", "../assets/images/iphone13-2.jpeg", "../assets/images/iphone13-3.jpeg"],
    name: "Iphone 13",
    price: 291972,
    description: "Apple iPhone 13 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0434\u0438\u0441\u043F\u043B\u0435\u0439 6.1 \u0434\u044E\u0439\u043C\u0430 Super Retina XDR, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043D\u0435\u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u2014 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u0432\u0438\u0434\u0435\u043E \u0438 \u0442\u0435\u043A\u0441\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u044F\u0442 \u043F\u043E\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0442\u043A\u043E. \u0410 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u0438 \u043A\u0430\u043C\u0435\u0440\u044B TrueDepth \u043D\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0435 \u0442\u0435\u043F\u0435\u0440\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F."
  }
];

// src/app/product-list/product-list.component.ts
import * as i03 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";
import * as i13 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_common.js?v=b6c84ebb";
function ProductListComponent_div_2_p_8_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "p");
    i03.\u0275\u0275text(1);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = i03.\u0275\u0275nextContext().$implicit;
    i03.\u0275\u0275advance();
    i03.\u0275\u0275textInterpolate1(" Description: ", product_r1.description, " ");
  }
}
function ProductListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    i03.\u0275\u0275element(2, "img", 3);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(3, "button", 4);
    i03.\u0275\u0275listener("click", function ProductListComponent_div_2_Template_button_click_3_listener() {
      i03.\u0275\u0275restoreView(_r5);
      const ctx_r4 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r4.nextImage(0));
    });
    i03.\u0275\u0275text(4, "See next Image");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(5, "h3")(6, "a", 5);
    i03.\u0275\u0275text(7);
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275template(8, ProductListComponent_div_2_p_8_Template, 2, 1, "p", 6);
    i03.\u0275\u0275elementStart(9, "button", 4);
    i03.\u0275\u0275listener("click", function ProductListComponent_div_2_Template_button_click_9_listener() {
      i03.\u0275\u0275restoreView(_r5);
      const ctx_r6 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r6.share());
    });
    i03.\u0275\u0275text(10, " Share ");
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275propertyInterpolate("src", product_r1.image.at(ctx_r0.nextImage(ctx_r0.i)), i03.\u0275\u0275sanitizeUrl);
    i03.\u0275\u0275advance(4);
    i03.\u0275\u0275property("title", product_r1.name + " details");
    i03.\u0275\u0275advance();
    i03.\u0275\u0275textInterpolate1(" ", product_r1.name, " ");
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", product_r1.description);
  }
}
var _ProductListComponent = class _ProductListComponent {
  constructor() {
    this.products = [...products];
    this.i = 0;
  }
  share() {
    window.alert("The product has been shared!");
  }
  nextImage(i) {
    return this.i += 1;
  }
};
_ProductListComponent.\u0275fac = function ProductListComponent_Factory(t) {
  return new (t || _ProductListComponent)();
};
_ProductListComponent.\u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [1, "images"], [3, "src"], [3, "click"], [3, "title"], [4, "ngIf"]], template: function ProductListComponent_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "h2");
    i03.\u0275\u0275text(1, "Products");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(2, ProductListComponent_div_2_Template, 11, 4, "div", 0);
  }
  if (rf & 2) {
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275property("ngForOf", ctx.products);
  }
}, dependencies: [i13.NgForOf, i13.NgIf], styles: ["\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 7%;\n  height: 100px;\n}\n/*# sourceMappingURL=product-list.component.css.map */"] });
var ProductListComponent = _ProductListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent" });
})();

// src/app/app.module.ts
import * as i04 from "/@fs/Users/nurasylnurtaza/Desktop/Web-dev/lab4/Product-app/.angular/cache/17.1.3/vite/deps/@angular_core.js?v=b6c84ebb";
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ i04.\u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ i04.\u0275\u0275defineInjector({ imports: [
  BrowserModule,
  ReactiveFormsModule,
  RouterModule.forRoot([
    { path: "", component: ProductListComponent }
  ])
] });
var AppModule = _AppModule;

// src/main.ts
__NgCli_bootstrap_1.platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLm1vZHVsZS50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIiwic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9wcm9kdWN0cy50cyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvcEJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50IH0sXHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBUb3BCYXJDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbXHJcbiAgICBBcHBDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcblxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyIsIjxhcHAtdG9wLWJhcj48L2FwcC10b3AtYmFyPlxyXG5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICA8ZGl2IGNsYXNzPjwvZGl2PlxyXG48L2Rpdj5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10b3AtYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLWJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvcEJhckNvbXBvbmVudCB7XHJcblxyXG59XHJcblxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iLCI8YSBbcm91dGVyTGlua109XCJbJy8nXVwiPlxyXG4gIDxoMT5NeSBTdG9yZTwvaDE+XHJcbjwvYT5cclxuXHJcbjxhIGNsYXNzPVwiYnV0dG9uIGZhbmN5LWJ1dHRvblwiPjxlbSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2hvcHBpbmdfY2FydDwvZW0+Q2hlY2tvdXQ8L2E+XHJcblxyXG5cclxuPCEtLSBcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuLS0+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydHtJbWFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9pbWFnZS9pbWFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSAnLi4vcHJvZHVjdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZHVjdC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCB7XHJcbiAgcHJvZHVjdHMgPSBbLi4ucHJvZHVjdHNdO1xyXG4gIGk6bnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pID0gMDtcclxuICB9XHJcblxyXG5cclxuICBzaGFyZSgpIHtcclxuICAgIHdpbmRvdy5hbGVydCgnVGhlIHByb2R1Y3QgaGFzIGJlZW4gc2hhcmVkIScpO1xyXG4gIH1cclxuICBuZXh0SW1hZ2UoaTpudW1iZXIpe1xyXG4gIHJldHVybiB0aGlzLmkgKz0gMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyIsIjxoMj5Qcm9kdWN0czwvaDI+XHJcbjxkaXYgY2xhc3MgPSdjb250YWluZXInICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPSdpbWFnZXMnPlxyXG4gICAgICAgIDxpbWcgc3JjPVwie3twcm9kdWN0LmltYWdlLmF0KG5leHRJbWFnZShpKSl9fVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJuZXh0SW1hZ2UoMClcIj5TZWUgbmV4dCBJbWFnZTwvYnV0dG9uPlxyXG4gICAgPGgzPlxyXG4gICAgICAgIDxhIFt0aXRsZV09XCJwcm9kdWN0Lm5hbWUgKyAnIGRldGFpbHMnXCI+XHJcbiAgICAgICAgICAgIHt7IHByb2R1Y3QubmFtZSB9fVxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvaDM+XHJcbiAgPHAgKm5nSWY9XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+XHJcbiAgICBEZXNjcmlwdGlvbjoge3twcm9kdWN0LmRlc2NyaXB0aW9ufX1cclxuICA8L3A+XHJcbiAgPGJ1dHRvbiAoY2xpY2spPVwic2hhcmUoKVwiPlxyXG4gICAgU2hhcmVcclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcblxyXG48IS0tIFxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4tLT4iLCJcclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcclxuICBpbWFnZTpzdHJpbmdbXTtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6WycuLi9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkLmpwZWcnLCBcIi4uL2Fzc2V0cy9pbWFnZXMvaXBob25lMTMtMi5qcGVnXCIsICcuLi9hc3NldHMvaW1hZ2VzL2lwaG9uZTEzLTMuanBlZyddLFxyXG4gICAgbmFtZTonSXBob25lIDEzJyxcclxuICAgIHByaWNlOjI5MTk3MixcclxuICAgIGRlc2NyaXB0aW9uOlwiQXBwbGUgaVBob25lIDEzINC/0L7Qu9GD0YfQuNC7INC00LjRgdC/0LvQtdC5IDYuMSDQtNGO0LnQvNCwIFN1cGVyIFJldGluYSBYRFIsINC60L7RgtC+0YDRi9C5INC+0YLQu9C40YfQsNC10YLRgdGPINC90LXQstC10YDQvtGP0YLQvdC+INCy0YvRgdC+0LrQvtC5INC/0LvQvtGC0L3QvtGB0YLRjNGOINC/0LjQutGB0LXQu9C10Lkg4oCUINGE0L7RgtC+0LPRgNCw0YTQuNC4LCDQstC40LTQtdC+INC4INGC0LXQutGB0YIg0LLRi9Cz0LvRj9C00Y/RgiDQv9C+0YDQsNC30LjRgtC10LvRjNC90L4g0YfQtdGC0LrQvi4g0JAg0LHQu9Cw0LPQvtC00LDRgNGPINGD0LzQtdC90YzRiNC10L3QvdC+0Lkg0L/Qu9C+0YnQsNC00Lgg0LrQsNC80LXRgNGLIFRydWVEZXB0aCDQvdCwINC00LjRgdC/0LvQtdC1INGC0LXQv9C10YDRjCDQsdC+0LvRjNGI0LUg0LzQtdGB0YLQsCDQtNC70Y8g0LjQt9C+0LHRgNCw0LbQtdC90LjRjy5cIlxyXG4gIH1cclxuXTtcclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDJCQUEyQjs7O0FDSHBDLFNBQVMsYUFBQUEsa0JBQWlCOzs7OztBRUExQixTQUFTLGlCQUFpQjs7OztBQU9wQixJQUFPLG1CQUFQLE1BQU8saUJBQWU7OzttQkFBZixrQkFBZTtBQUFBO29GQUFmLGtCQUFlLFdBQUEsQ0FBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxnQkFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLHlCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FDUDVCLElBQUEsNEJBQUEsR0FBQSxLQUFBLENBQUEsRUFBd0IsR0FBQSxJQUFBO0FBQ2xCLElBQUEsb0JBQUEsR0FBQSxVQUFBO0FBQVEsSUFBQSwwQkFBQSxFQUFLO0FBR25CLElBQUEsNEJBQUEsR0FBQSxLQUFBLENBQUEsRUFBK0IsR0FBQSxNQUFBLENBQUE7QUFBMkIsSUFBQSxvQkFBQSxHQUFBLGVBQUE7QUFBYSxJQUFBLDBCQUFBO0FBQUssSUFBQSxvQkFBQSxHQUFBLFVBQUE7QUFBUSxJQUFBLDBCQUFBOzs7QUFKakYsSUFBQSx3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