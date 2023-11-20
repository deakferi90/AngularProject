import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/courses'; 


@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  //private model = 'courses';
  private apiUrl = 'assets/courses.json'; 
  courses: any = null;
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
    return this.http.put(`${this.apiUrl}${course.id}`, course);
    //console.log('update course', course);
  }

  deleteResource(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  delete(courseId: any) {
    console.log('item deleted', `${this.apiUrl}/${courseId}`);
    //const url = `${this.apiUrl}/${courseId}`;
    return this.http.delete(`${BASE_URL}/${courseId}`);
  }

  private getUrl() {
    return `${BASE_URL}`;
  }
}
