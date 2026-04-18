import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Product Management';

  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: (resp: any) => {
        this.service.products = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
