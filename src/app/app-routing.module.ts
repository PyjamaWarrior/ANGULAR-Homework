import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./users/users.module').then(value => value.UsersModule)},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(value => value.PostsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
