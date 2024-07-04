import { Injectable } from '@nestjs/common';

@Injectable() /*Esta anotación marca la clase UserService como un servicio inyectable. 
En frameworks como Angular o NestJS, esto permite que el servicio sea inyectado en otros 
componentes o servicios a través del sistema de inyección de dependencias.*/
export class UserService {
  private readonly users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password456' },
  ];/*private readonly users: Define una propiedad privada y de solo lectura llamada users que contiene un arreglo de objetos de usuario.
  Cada objeto de usuario tiene las propiedades id, name, email y password.*/

  findAll() {
    return this.users;
  }/*Este método devuelve todos los usuarios almacenados en la propiedad users.
No toma ningún parámetro y simplemente retorna el arreglo users.*/

  findUser(email: string) {
    return this.users.find(user => user.email === email);
  }/*findAll(): Devuelve todos los usuarios.
findUser(email: string): Encuentra y devuelve un usuario basado en su email.*/
}
