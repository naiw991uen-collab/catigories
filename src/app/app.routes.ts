import { Routes } from '@angular/router';
import { Category } from './category/category';
import { Products } from './products/products';
import { SingleProduct } from './single-product/single-product';
import { Register } from './register/register';
import { Login } from './login/login';
import { omarGuard } from './omar-guard';

export const routes: Routes = [
    {path:'',redirectTo:"/login",pathMatch:'full'},
    {path:'cat',component:Category,canActivate:[omarGuard]},
    {path:'products/:category',component:Products,canActivate:[omarGuard]},
    {path:'single/:id',component:SingleProduct,canActivate:[omarGuard]},
    {path:'register',component:Register},
    {path:'login',component:Login},
{path:"**",component:Login}
];
