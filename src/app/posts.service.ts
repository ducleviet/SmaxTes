import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = 'https://64ca28e5b2980cec85c2fd73.mockapi.io/posts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(
    private http: HttpClient) { }
  
  getPotst(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsUrl).pipe(
      tap(recevitePosts => console.log(`recevitePosts = ${JSON.stringify(recevitePosts)}`)),
      catchError(error => of([]))
    )
  }
  getPost(id: number): Observable<Posts> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Posts>(url).pipe(
      tap(selectPost => console.log(`selectPost = ${JSON.stringify(selectPost)}`)),
      catchError(error => of(new Posts()))
    )
  }
  updatedPost(post: Posts, id: number): Observable<any>{
    const url = `${this.postsUrl}/${id}`;
    return this.http.put(url, post, this.httpOptions).pipe(
      tap(updatedPost => console.log(`updated post = ${JSON.stringify(updatedPost)}`)),
      catchError(error => of(new Posts()))
    )
  }

  addPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.postsUrl, post, this.httpOptions).pipe(
      tap((post: Posts) =>console.log(`post = ${JSON.stringify(post)}`)),
      catchError(erro => of(new Posts()))
    )
  }
  login(account: any): Observable<any>{
    const url = "https://appmovie.onrender.com/user/api/login"
    return this.http.post(url, account, this.httpOptions)
  }

}
