import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let user = "admin"

  if(user === "admin"){
    return true
  }else{
    router.createUrlTree(['/u/dashboard'])
    return false
  }

};
