import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
    children: [{
      path: ':id', component: UserDetailsComponent,
      children: [{path: 'posts', component: PostsComponent}]
    }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
