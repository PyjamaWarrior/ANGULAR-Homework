import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  userId: number;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(value => {
      console.log(value);
      this.postService.getPostsByUserId(value.id).subscribe(posts => {
        this.posts = posts;
      });
    });

  }

}
