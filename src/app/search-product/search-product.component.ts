import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css',
})
export class SearchProductComponent {
  searchStr: string = '';
  filteredProducts: any[] = this.service.products;

  constructor(public service: ProductService) {}

  search() {
    if (this.searchStr.length == 0) {
      this.filteredProducts = this.service.products;
    } else {
      this.filteredProducts = this.service.products.filter((p) =>
        p.pname.toLowerCase().includes(this.searchStr.toLowerCase()),
      );
    }
  }
}
