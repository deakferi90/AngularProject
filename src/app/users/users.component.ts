import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  filteredUsers: any = [];
  user: any = '';
  checkoutForm: FormGroup;
  formValues: any = {};

  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef;
  usersList: any = null;

  constructor(public http: HttpClient,
    public users: UsersService, private router: Router, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      age: '',
      img: "assets/Kyle_Simpson.jpg",
      email: ''
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  viewDetails(id: number, user: any) {
    this.user = user;
    this.router.navigate(['/users',  id + 1]);
  }

  getUsers() {
    return this.users.getUserList().subscribe(data => {
      this.usersList = data;
      this.filterUsers();
    })
  }

  deleteUser(id: any) {
    return this.users.delete(id).subscribe(() => this.getUsers());
  }

  onSubmit() {
    console.log('Form Values:', this.checkoutForm.value);
    this.formValues = this.checkoutForm.value;
    let posted = this.http.post(this.users.getUrl(),this.formValues );
    let postedTwo = posted.subscribe(data => {
      this.usersList = data;
    })
    return postedTwo;
  }

  isFormInvalid(): boolean {
    return !this.checkoutForm.value.firstName ||
    !this.checkoutForm.value.lastName  || !this.checkoutForm.value.username || !this.checkoutForm.value.age;
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
