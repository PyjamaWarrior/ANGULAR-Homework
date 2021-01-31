import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {PostsService} from './services/posts.service';
import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [PostsComponent, PostComponent, PostDetailsComponent],
  imports: [
    HttpClientModule,
    PostsRoutingModule,
    CommonModule
  ],
  exports: [HttpClientModule],
  providers: [PostsService]
})
export class PostsModule {
}
