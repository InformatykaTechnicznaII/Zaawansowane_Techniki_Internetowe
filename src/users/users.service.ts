import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: User): User {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  update(id: number, user: User): User {
    const index = this.users.findIndex(user => user.id === id);
    this.users[index] = { id, ...user };
    return this.users[index];
  }

  remove(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    this.users.splice(index, 1);
  }
}
