import { Component } from '@angular/core';

interface IUser {
  name: string;
  age: number;
  cash: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: IUser[] = [
    { name: "Данил Сечин", age: 20, cash: 15000 },
    { name: "Евгений Михайловский", age: 20, cash: 25000 },
    { name: "Антон Поторочин", age: 20, cash: 20000 },
    { name: "Максим Селезенев", age: 28, cash: 40000 },
    { name: "Максим Прохоренко", age: 79, cash: 35000 },
    { name: "Максим Богатых", age: 65, cash: 60000 }
  ];

  message = "";
  searchQuery = "";
  foundUsers: IUser[] = [];

  handleSearch = (e: Event) => {
    e.preventDefault();

    const foundUsers: IUser[] = [];

    this.users.forEach(user => {
      const name = user.name.toLowerCase();
      const searchQuery = this.searchQuery.toLowerCase();

      if (name.includes(searchQuery) ||searchQuery.includes(name)) {
        foundUsers.push(user);
      }
    })

    if (!foundUsers.length) {
      this.foundUsers = [];
      this.message = "Пользователи не найдены";
      return;
    };

    this.foundUsers = foundUsers;
    this.message = "";
  }

  handleInput = (e: Event) => {
    const input = e.currentTarget as HTMLInputElement;
    this.searchQuery = input.value;
  }
}
