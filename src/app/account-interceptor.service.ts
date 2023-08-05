import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class AccountInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let postsServce = this.injector.get(PostsService)  
    let accountzedReq= req.clone({
        setHeaders: {
          Authorization: `Bearer ${postsServce.getAccount()}`
        }
      })
      return next.handle(accountzedReq);
  }
}
