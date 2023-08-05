import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'ngx-bootstrap/tooltip'
import{ModalModule} from 'ngx-bootstrap/modal'
import { AccountInterceptorService } from './account-interceptor.service';
import { PostsService } from './posts.service';
import { ReactiveFormComponent } from './login/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsDetailComponent,
    EditPostComponent,
    NewPostComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [PostsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AccountInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
