import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { BooksComponent } from './books/books.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {
    path: 'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  }, //-this is lazy loading within this lazy loading module within
  {path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UsersDetailsComponent },
  { path: 'ngrx', component: NgrxComponent },
  {path: 'books', component: BooksComponent},
  {path: 'chart', component: ChartComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
