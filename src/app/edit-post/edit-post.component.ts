import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../posts';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: Posts | undefined;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location
  ){}
  ngOnInit(): void {
      this.getPost();
  }

  getPost(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postsService.getPost(id).subscribe(post => this.post = post)
  }

  goBack(): void {
    this.location.back();
  }

  seve(): void {
    if(this.post) {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.postsService.updatedPost(this.post, id).subscribe(() => this.goBack())
    }
  }

}
