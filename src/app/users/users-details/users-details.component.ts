import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  show: boolean = false;
  userData: any | User;
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  username: string = '';
  email: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private user: UsersService) { }

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('id');
    userId && this.user.getUser(userId).subscribe((res) => {
      this.userData = res;
    })
  }

  editCard() {
    this.show = true;
  }

  closeCard() {
    this.show = false;
  }

  updateCard() {
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;

    this.userData.firstName = firstNameInput?.value || this.userData.firstName;
    this.userData.lastName = lastNameInput?.value || this.userData.lastName;
    this.userData.age = ageInput?.value || this.userData.age;
    this.userData.username = usernameInput?.value || this.userData.username;
    console.log(this.userData);
  
    const updatedUser: User = {
      id: this.userData.id,
      // email: this.userData.email,
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      age: this.userData.age,
      username: this.userData.username,
      img: this.userData.img
    };
    this.show = false;
    return this.user.updateUser(this.userData.id, updatedUser).subscribe(
      (response) => console.log('Update successful on the server:', response),
      (error) => console.error('Error updating user on the server:', error)
    );
  }

  redirectBack() {
    this.router.navigateByUrl('/users');
  }
}
