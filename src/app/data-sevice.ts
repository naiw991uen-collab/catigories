import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSevice {
  
  constructor(private _HttpClient:HttpClient){}

  getCat():Observable<any>{
     let res=this._HttpClient.get('https://dummyjson.com/products/category-list');
     return res;
  }
  
  getProducts(cat:string):Observable<any>{
     let res=this._HttpClient.get(`https://dummyjson.com/products/category/${cat}`);
     return res;
  }
  getSingleProducts(id:number):Observable<any>{
     let res=this._HttpClient.get(`https://dummyjson.com/products/${id}`);
     return res;
  }
  userLogin(data:any):Observable<any>{
    let res=this._HttpClient.post("https://dummyjson.com/user/login",data);
    return res;
  }
  islogined=new BehaviorSubject(false);
}
