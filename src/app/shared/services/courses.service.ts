import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private apiUrl = 'assets/courses.json'; 
  //   let courses = [
  //   {
  //     id: 1,
  //     title: 'Hello Angular',
  //     description: 'Learn the fundamentals of Angular',
  //     percent: 25,
  //     favorite: true
  //   },
  //   {
  //     id: 2,
  //     title: 'Javascript the hard parts',
  //     description: 'Learn the hard parts of Javascript',
  //     percent: 50,
  //     favorite: true
  //   },
  //   {
  //     id: 3,
  //     title: 'Feri is learning Angular',
  //     description: 'But first learn the hard parts of Javascript',
  //     percent: 75,
  //     favorite: true
  //   },
  // ]
  constructor(private http: HttpClient) { }

  all(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  find(courseId: any) {
    console.log('find course', courseId);
  }

  create(course: any) {
    console.log('create course', course);
  }

  update(course: any) {
    console.log('update course', course);
  }

  delete(courseId: any) {
    console.log('item deleted', courseId);
  }
}
