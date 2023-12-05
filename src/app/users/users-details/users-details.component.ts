import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  userData: any | User
  constructor(private route: ActivatedRoute, private user: UsersService) {}

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('id');
    userId && this.user.getUser(userId).subscribe((res) => {
      this.userData = res;
    })
  }
}
