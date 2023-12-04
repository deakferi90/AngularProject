import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  courses: any = null;
  model: string = 'users';

  constructor(public http: HttpClient) { }

  public getUsers() {
    return this.http.get<object[]>(this.getUrl());
  }

  public getUrl() {
    return `${BASE_URL}/${this.model}`;
  }
  
  private getUrlById(id: any) {
    return `${this.getUrl()}/${id}`;
  }

  delete(courseId: any) {
    return this.http.delete(this.getUrlById(courseId));
  }
}
