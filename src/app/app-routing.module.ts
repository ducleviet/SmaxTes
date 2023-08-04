import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

import { ReactiveFormComponent } from './login/reactive-form.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostsDetailComponent},
  // {path: 'edit-post/:id', component: EditPostComponent},
  {path: 'newposts', component: NewPostComponent, canActivate:[authGuard]},
  // {path: 'login', component: ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
