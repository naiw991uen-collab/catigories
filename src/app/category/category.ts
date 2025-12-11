import { Component, OnInit, signal } from '@angular/core';
import { DataSevice } from '../data-sevice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit{
  categories=signal<any[]>([]);
  isLoading=signal(true);
  error=signal('')
  images: string[]=["https://tse4.mm.bing.net/th/id/OIP.eyt8QVQ9kfYN47JhYPDmZAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3","https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?cs=srgb&dl=fashion-relaxation-bottles-965989.jpg&fm=jpg","https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg","https://tse3.mm.bing.net/th/id/OIP.dhf0Z4ERL5a2ibwoEHVSfAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3","https://media.designcafe.com/wp-content/uploads/2020/04/23125905/creative-home-decor-ideas.jpg","https://th.bing.com/th/id/R.73396200aa5a155e433eadf5dab00da9?rik=LLOTNb8cWUJ4Xw&pid=ImgRaw&r=0","https://www.bing.com/th/id/OIP.30y29wUXqS17aMfWTdQ7rQHaE8?w=286&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://www.bing.com/th/id/OIP.MOY4Kfe2p_S26OQK9QyxzwHaEh?w=297&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://www.bing.com/th/id/OIP.yFiC0KeOsWFU7WcwrYO9HgHaGl?w=179&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://www.bing.com/th/id/OIP.-g0lQaBePO7VKLShcolCygHaEK?w=294&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://www.bing.com/th/id/OIP.pfaIJe3fkbLLqpqtv1L8XQHaDr?w=298&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://www.bing.com/th/id/OIP.LlGALsjmSWyrpPthAnxUTQHaF4?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://www.bing.com/th/id/OIP.AjhDW0OtAOQGO4iJrXZ2OgHaEK?w=375&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://th.bing.com/th/id/OIP.3lEagT-FjHmItDVXV4zgwAHaDK?w=288&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3","https://www.bing.com/th/id/OIP.8aZVdLbVJ6OOuQIQ5O9DMwHaFq?w=209&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://www.bing.com/th/id/OIP.7DFSCP6o8gn9ubSo_WgwfAHaJ4?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://th.bing.com/th/id/OIP.c034wcEWDaq9DBdPHH7KuAHaFB?w=242&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3","https://th.bing.com/th/id/OIP.g8ctvJ-gaYizjU-8OBJj6wHaGW?w=193&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3","https://www.bing.com/th/id/OIP.qYCUWrXU149uQhB8FwKzcwHaE8?w=253&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://tse1.mm.bing.net/th/id/OIP.MTeRXDzgBaa7656tfn-k8wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3","https://th.bing.com/th/id/OIP.XjxUDVEcIKxVc-k_KlSUMgHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3","https://www.bing.com/th/id/OIP.AQCsOlfVXRAyfJeklYHpXwHaEK?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2","https://th.bing.com/th/id/OIP.1GGeZhlddTfpigYYsSL0BQHaE7?w=239&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3","https://th.bing.com/th/id/OIP.9SKKMD1PLjq5LPtb3CE_-AHaEK?w=316&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"];
   constructor(private _DataSevice:DataSevice){}
   ngOnInit(): void {
      this._DataSevice.getCat().subscribe({
        next:(data)=>{
          this.categories.set(data);
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






