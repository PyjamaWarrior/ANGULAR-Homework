import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  @Output() eventEmitter = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPostDetails(post: Post): void {
    this.eventEmitter.emit(post);
  }
}
