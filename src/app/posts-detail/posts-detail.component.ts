import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Posts } from '../posts';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {
  post: Posts | undefined;
  modalRef?: BsModalRef;
  config = {
    animated: true
  };

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private modalService: BsModalService
    ) {}
  ngOnInit(): void {
      this.getPost();
  }
  getPost(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postsService.getPost(id).subscribe(post => this.post = post)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }  
}
