import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password456' },
  ];

  findAll() {
    return this.users;
  }

  findUser(email: string) {
    return this.users.find(user => user.email === email);
  }
}
