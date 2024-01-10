import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    {path: '/users', icon: 'person', title: 'Users'},
    { path: '/**', redirectTo: "/home" },
    { path: '/ngrx', icon: 'store', title: "Ngrx" },
    {path: '/books', icon: 'book', title: 'Books'},
    {path: 'chart', icon:'donut_large', title: 'Chart'}
  ];
  constructor(private router: Router) { }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
