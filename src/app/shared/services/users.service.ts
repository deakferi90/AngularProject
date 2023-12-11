import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  courses: any = null;
  model: string = 'users';

  constructor(public http: HttpClient) { }

  public getUserList() {
    return this.http.get<object[]>(this.getUrl());
  }

  public getUser(id: any) {
    return this.http.get(this.getUrlById(id));
  }

  public getUrl() {
    return `${BASE_URL}/${this.model}`;
  }
  
  private getUrlById(id: any) {
    return `${this.getUrl()}/${id}`;
  }

  public delete(courseId: any) {
    return this.http.delete(this.getUrlById(courseId));
  }

  //public createUser() {
    // return this.http.post(this.getUrl(), {
    //   "id": 5,
    //   "username": "kyle",
    //   "lastName": "Simpson",
    //   "firstName": "Kyle",
    //   "email": "kylesimpson@gmail.com",
    //   "age": 42,
    //   "img": ""
    // })
  //}

  updateUser(id: string, updatedUser: User): Observable<User> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.put<User>(url, updatedUser);
  }
}
