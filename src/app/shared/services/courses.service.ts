import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const BASE_URL = 'http://localhost:3000'; 


@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  courses: any = null;
  model: string = 'courses';
  constructor(private http: HttpClient) { }

  all(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl());
  }

  find(courseId: any) {
    console.log('find course', courseId);
  }

  create(course: any) {
    return this.http.post(this.getUrl(), course);
  }

  update(course: any) {
    return this.http.put(this.getUrlById(course.id), course);
  }

  delete(courseId: any) {
    return this.http.delete(this.getUrlById(courseId));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlById(id: any) {
    return `${this.getUrl()}/${id}`;
  }
}
