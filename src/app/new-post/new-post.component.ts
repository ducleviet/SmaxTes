import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../posts.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post: Posts[] = [];

  rfContact = this.fb.group({
    title:['', Validators.required],
    picture: [''],
    description:['', Validators.required],
    detail: ['', Validators.required],
  })

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location,
    private fb: FormBuilder,
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
    this.postsService.addPost({title, picture, description, detail} as Posts).subscribe(newPosts => {
      this.post.push(newPosts)
    })
  }
  onSubmit() {
    this.postsService.addPost(this.rfContact.value as Posts).subscribe(newPosts => {
      this.post.push(newPosts)
      this.goBack()
    })
  }

}
