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
}
