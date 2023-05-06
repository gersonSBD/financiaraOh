import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/data/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedUsersService {

  private sharedUserObservable: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  get sharedUser() {
    return this.sharedUserObservable.asObservable();
  }

  set sharedUsersData(users: IUser[]) {
    this.sharedUserObservable.next(users);
  }
  
}
