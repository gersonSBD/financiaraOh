import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/data/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlBase: string = environment.apiEndPoint + 'users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.urlBase).pipe(
      map((users: any) => {
        return users.users
      })
    );
  }

  save(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.urlBase, user).pipe(
      map((users: any) => {
        return users.users
      })
    );
  }
}
