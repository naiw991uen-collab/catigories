import { Component, signal } from '@angular/core';
import { DataSevice } from '../data-sevice';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 products=signal<any[]>([]);
  isLoading=signal(true);
  error=signal('')
   constructor(private _DataSevice:DataSevice,private _ActivatedRoute:ActivatedRoute){}
     

   ngOnInit(): void {
    let par=this._ActivatedRoute.snapshot.params["category"];
      this._DataSevice.getProducts(par).subscribe({
        next:(data)=>{
          this.products.set(data.products);
          this.isLoading.set(false);
          console.log(data);
        },
        error:(error)=>{
this.error.set(error);
this.isLoading.set(false);
        }
      })
   }
}
