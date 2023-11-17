import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses = [
    {
      id: 1,
      title: 'Hello Angular',
      description: 'Learn the fundamentals of Angular',
      percent: 25,
      favorite: true
    },
    {
      id: 2,
      title: 'Javascript the hard parts',
      description: 'Learn the hard parts of Javascript',
      percent: 50,
      favorite: true
    },
    {
      id: 3,
      title: 'Feri is learning Angular',
      description: 'But first learn the hard parts of Javascript',
      percent: 75,
      favorite: true
    },
  ]
  constructor() { }

  all() {
    return this.courses;
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
    console.log('delete course', courseId);
  }
}
