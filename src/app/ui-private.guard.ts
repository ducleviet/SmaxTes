import { CanActivateFn } from '@angular/router';

export const uiPrivateGuard: CanActivateFn = (route, state) => {
  const token: string | null = localStorage.getItem("user")
  if(token != null) {
    return true
  } return false
};
