import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  posts: Posts[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPotst().subscribe(posts => this.posts = posts);
  }

}
