import { Component, signal } from '@angular/core';
import { DataSevice } from '../data-sevice';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './single-product.html',
  styleUrl: './single-product.css',
})
export class SingleProduct {
  singleProduct: any = "";
  amount: number = 1;
  isLoading = signal(true);
  error = signal('');

  cartCount = signal(0); // ← عدد المنتج الحالي فقط

  constructor(private _DataSevice: DataSevice, private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this._ActivatedRoute.snapshot.params['id'];

    // قراءة العدد من localStorage الخاص بالمنتج
    const savedCount = localStorage.getItem(`cartCount_${productId}`);
    if (savedCount) {
      this.cartCount.set(+savedCount);
    }

    this._DataSevice.getSingleProducts(productId).subscribe({
      next: (data) => {
        this.singleProduct = data;
        this.isLoading.set(false);
      },
      error: (error) => {
        this.error.set(error);
        this.isLoading.set(false);
      }
    });
  }

  addToCart() {
    const productId = this._ActivatedRoute.snapshot.params['id'];
    const newCount = this.cartCount() + this.amount;
    this.cartCount.set(newCount);
    localStorage.setItem(`cartCount_${productId}`, newCount.toString()); // ← حفظ العدد الخاص بالمنتج
  }

  removeFromCart() {
    const productId = this._ActivatedRoute.snapshot.params['id'];
    const newCount = this.cartCount() - this.amount;
    const finalCount = newCount >= 0 ? newCount : 0;
    this.cartCount.set(finalCount);
    localStorage.setItem(`cartCount_${productId}`, finalCount.toString()); // ← تحديث العدد
  }
}



