import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation()?.extras.state as Post;
    });
  }

  ngOnInit(): void {
  }

}
