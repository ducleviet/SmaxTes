import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {


  rfContact = this.fb.group({
    username:['', Validators.required],
    password: ['', Validators.required],
  })

  modalRef?: BsModalRef;
  config = {
    animated: false
  };
  
  constructor(
    private postsService: PostsService,
    private fb: FormBuilder,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.postsService.login(this.rfContact.value).subscribe(data =>{
      if(data.success === true) {
        localStorage.setItem("user", data.data)
        this.modalService.hide();
      }
      else {
        alert('Tài khoản hoặc mật khẩu không đúng')
      }
    })
  }

}
