import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../posts';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post: Posts[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location
  ){}
  
  ngOnInit(): void {
      
  }

  goBack(): void {
    this.location.back();
  }

  add(title: string, picture: string, description: string, detail: string): void {
    title = title.trim();
    picture = picture.trim();
    detail = detail.trim();
    description = description.trim();
    if(!title && !detail && !description) {
      alert("Chưa nhập đủ các trường bắt buộc")
      return
    }
    const newPosts: Posts = new Posts();
    newPosts.title = title;
    newPosts.picture = picture;
    newPosts.description = description;
    newPosts.detail = detail;
    this.postsService.addPost(newPosts).subscribe(newPosts => {
      this.post.push(newPosts)
    })
  }

}
