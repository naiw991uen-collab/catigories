import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataSevice } from './data-sevice';

export const omarGuard: CanActivateFn = (route, state) => {
   let dataService=inject(DataSevice);
   let router=inject(Router);
let test:any;
dataService.islogined.subscribe((x)=>{
  test=x;
})
if(test==true){
 return true;
}else{
  router.navigate(['/login']);
  return false;
}

 
};
