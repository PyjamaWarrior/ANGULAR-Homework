import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './services/users.service';
import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserDetailsComponent],
  imports: [
    HttpClientModule,
    UsersRoutingModule,
    CommonModule
  ],
  exports: [HttpClientModule],
  providers: [UsersService]
})
export class UsersModule {
}
