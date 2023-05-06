import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/data/interfaces/user.interface';
import { UserService } from '../services/user.service';
import { SharedUsersService } from 'src/app/core/services/shared-users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public users: IUser[]= [];
  public displayUserModal: boolean = false;

  constructor(private userService: UserService, private sharedUsersService: SharedUsersService) { 
    this.sharedUsersService.sharedUser.subscribe((users: IUser[]) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: IUser[]) => {
      console.log('users', users);
      this.sharedUsersService.sharedUsersData = users;
    });
  }
  
  showModalDialog(): void {
    this.displayUserModal = true;
  }

  hideModalDialog(hideModal: boolean): void {
    this.displayUserModal = hideModal;
  }

}
