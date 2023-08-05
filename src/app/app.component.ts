import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';
  status: string

  modalRef?: BsModalRef;
  config = {
    animated: true
  };

  constructor(
    private modalService: BsModalService,
    private postsService: PostsService,
  ) {this.fixStatus()}
  
  fixStatus() {
    this.postsService.loggedIn()? this.status = 'Log Out' : this.status = "Log In";
  }

  openModal(template: TemplateRef<any>) {
    if(this.postsService.loggedIn()) {
      localStorage.removeItem('user')
      this.fixStatus();
      alert('Bạn đã đăng xuất')
      return
    }
    this.modalRef = this.modalService.show(template, this.config);
  }
}
