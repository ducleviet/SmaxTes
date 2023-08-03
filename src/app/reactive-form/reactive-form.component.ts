import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {


  rfContact = this.fb.group({
    username:['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(
    private postsService: PostsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // this.rfContact = new FormGroup({
    //   username: new FormControl(),
    //   password: new FormControl(),
    // });
  }

  onSubmit() {
    this.postsService.login(this.rfContact.value).subscribe(data =>{
      if(data.success === true) {
        localStorage.setItem("user", data.data)
      }
      else {
        alert('Tài khoản hoặc mật khẩu không đúng')
      }
    })
  }

}
