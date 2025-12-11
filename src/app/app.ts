import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Category } from './category/category';
import { Products } from './products/products';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Category,Products,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular20-app');
}
