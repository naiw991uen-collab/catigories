import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataSevice } from '../data-sevice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  login=false;
constructor(private _Datasevice:DataSevice, private _Router:Router){
  this._Datasevice.islogined.subscribe((x)=>{
this.login=x;
  })
}
logout(){
  this._Datasevice.islogined.next(false);
  this._Router.navigate(['/login']);
}
}
