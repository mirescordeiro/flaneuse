import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./features/shop/pages/home/home.component").then((m) => m.HomeComponent),
  },
];
