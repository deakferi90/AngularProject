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
  userData: any | User
  constructor(private route: ActivatedRoute, private router: Router ,private user: UsersService) {}

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

  redirectBack() {
    this.router.navigateByUrl('/users');
  }
}
