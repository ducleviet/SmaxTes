import { inject } from '@angular/core';
import { CanActivateFn} from '@angular/router';
import { PostsService } from './posts.service';

export const authGuard: CanActivateFn = (route, state) => {
  const postService = inject(PostsService)

  if(postService.loggedIn()) {
    return true
  }else {
    return false;
  }
};
