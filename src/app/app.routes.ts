import { Routes } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
  { path: 'search', component: SearchProductComponent },
  { path: 'productslist', component: ProductsListComponent },
];
