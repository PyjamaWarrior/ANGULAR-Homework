import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(value => this.users = value);
  }

}
