import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular 16 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
    {path: '/users', icon: 'person', title: 'User'},
    { path: '/**', redirectTo: "/home" },
  ];
  constructor(private router: Router) { }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
