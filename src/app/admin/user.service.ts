import { Injectable } from '@angular/core';
import { User } from './user';
import { users } from './user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = users;


  public getUser() {
      return this.users;
  }
}
