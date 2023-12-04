import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  index: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the index parameter from the route
    this.route.params.subscribe((params) => {
      this.index = params['index'];
      // Use the index as needed
    });
  }
}
