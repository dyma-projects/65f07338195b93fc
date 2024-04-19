import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];

  constructor (private _userService: UserService) { }

  ngOnInit() {
    this._userService.users.subscribe(users =>{
      this.users = users;
    })
  }
}
