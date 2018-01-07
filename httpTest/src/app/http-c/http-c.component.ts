import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataPostService } from '../data-post.service';

@Component({
  selector: 'app-http-c',
  templateUrl: './http-c.component.html',
  styleUrls: ['./http-c.component.css']
})
export class HttpCComponent implements OnInit {


  posts: any[];
  // private url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private service: DataPostService) {

  }
  ngOnInit() {
    this.service.getPosts()
      .subscribe(res => {
        // console.log(res.json());
        this.posts = res.json();
      })
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    }
    input.value = '';
    this.service.createPost(post)
    .subscribe(res => {
      post['id'] = res.json().id;//bug cannot be deleted
      // post['id'] = 1;
      this.posts.splice(0,0,post);
      console.log(res.json())
    });
  }

  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(res => {
      console.log(res.json())
    })
  }

  deletePost(post) {
    this.service.deletePost(post)
    .subscribe(res => {
      let idx = this.posts.indexOf(post);
      console.log(idx);
      this.posts.splice(idx, 1);
    })
  }

}
