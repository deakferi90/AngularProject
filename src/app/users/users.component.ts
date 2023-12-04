import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  filteredUsers: any = [];

  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef;
  usersList: any = null;
  constructor(public users: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    return this.users.getUsers().subscribe(data => {
      this.usersList = data;
      this.filterUsers();
    })
  }

  deleteUser(id: any) {
    return this.users.delete(id).subscribe(() => this.getUsers());
  }

  filterUsers() {
    const inputValue = this.inputElement.nativeElement.value.toLowerCase();
    this.filteredUsers = this.usersList.filter((user: any) => {
      return (
        user.firstName.toLowerCase().includes(inputValue) ||
        user.lastName.toLowerCase().includes(inputValue)
      );
    });
  }
}
