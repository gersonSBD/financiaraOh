import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedUsersService } from 'src/app/core/services/shared-users.service';
import { IUser } from 'src/app/data/interfaces/user.interface';


@Component({
  selector: 'displayModal',
  templateUrl: './users-abstract.component.html',
  styleUrls: ['./users-abstract.component.scss']
})
export class UsersAbstractComponent implements OnInit {

  @Input() displayModal: boolean = false;
  @Output() hideModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  public users: IUser[]= [];
  public averageAge: number = 0;

  constructor(private sharedUsersService: SharedUsersService) {
    this.sharedUsersService.sharedUser.subscribe((users: IUser[]) => {
      this.users = users;
      this.calculateAverageAge();
    });
  }

  ngOnInit(): void {
    
  }

  calculateAverageAge(): void {
    this.averageAge = this.users.reduce((acc, user) => {
      return acc + user.age;
    }, 0) / this.users.length;
  }

  hideModalDialog(): void {
    this.hideModal.emit(false);
  }

}
