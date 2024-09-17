import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./features/shop/pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "product-detail",
    loadComponent: () => import("./features/product/pages/product/product.component").then((m) => m.ProductComponent),
  },
  {
    path: "cart",
    loadComponent: () => import("./features/cart/pages/cart/cart.component").then((m) => m.CartComponent),
  },
  {
    path: "login",
    loadComponent: () => import("./core/auth/pages/login/login.component").then((m) => m.LoginComponent),
  },
];
