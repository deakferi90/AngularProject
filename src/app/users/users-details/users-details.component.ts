import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(private route: ActivatedRoute, private router: Router,
    private user: UsersService, private cdr: ChangeDetectorRef) { }

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
    //const imgBox = document.getElementById('imgBox') as HTMLInputElement;

    this.userData.firstName = firstNameInput?.value || this.userData.firstName;
    this.userData.lastName = lastNameInput?.value || this.userData.lastName;
    this.userData.age = ageInput?.value || this.userData.age;
    this.userData.username = usernameInput?.value || this.userData.username;
    //this.userData.img = "assets/gyerek.jfif";
    // imgBox.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
    // this.userData.img = imgBox.style.backgroundImage || this.userData.img;
    //console.log(this.userData);

    const updatedUser: User = {
      id: this.userData.id,
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      age: this.userData.age,
      username: this.userData.username,
      img: this.userData.img
    };
    this.show = false;
    return this.user.updateUser(this.userData.id, updatedUser).subscribe(
      () => this.cdr.detectChanges()
    );
  }

  redirectBack() {
    this.router.navigateByUrl('/users');
  }


  // url: any;
  // msg = "";

  selectFile(event: any) {
    const imgBox = document.getElementById('imgBox') as HTMLInputElement;
    imgBox.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";

    const fileName = event.target.files[0].name;
    const imagePath = `assets/${fileName}`;

    this.userData.img = imagePath;

    // let mimeType = event.target.files[0].type;
    // if (mimeType.match(/image\/*/) == null) {
    //   this.msg = "Only images are supported";
    //   return;
    // }

    // let reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);

    // reader.onload = (_event) => {
    //   this.msg = "";
    //   this.url = reader.result;
    // }
  }
}
