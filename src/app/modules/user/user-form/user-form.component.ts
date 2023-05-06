import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from 'src/app/data/interfaces/user.interface';
import { SharedUsersService } from 'src/app/core/services/shared-users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public users: IUser[]= [];
  public userForm?: FormGroup;

  constructor(private userService:UserService, private sharedUsersService: SharedUsersService) {
    this.sharedUsersService.sharedUser.subscribe((users: IUser[]) => {
      this.users = users;
    });
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      birthday: new FormControl('', [Validators.required])
    });
  }

  public save(): void {
    if(this.userForm?.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    this.userService.save(this.userForm?.value).subscribe( (user:IUser) => {
      this.users.push(user);
      this.sharedUsersService.sharedUsersData = this.users;
    }, (error) => {
      console.log(error);
    });
  }

  validateField(field: string): boolean {    
    return this.userForm?.get(field)?.invalid && (this.userForm?.get(field)?.dirty || this.userForm?.get(field)?.touched) ? true : false;
  }

}
