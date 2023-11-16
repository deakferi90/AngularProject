import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  //challenge
  //step 1: display courses using ngfor
  //step 2: add event handler to select home
  //step 3: display raw json of selected course
  displayRawJSON: any = '';
  courses = [
    {
      id: 1,
      title: 'Hello Angular',
      description: 'Learn the fundamentals of Angular',
      percent: 26,
      favorite: true
    },
    {
      id: 1,
      title: 'Javascript the hard parts',
      description: 'Learn the hard parts of Javascript',
      percent: 50,
      favorite: true
    },
    {
      id: 1,
      title: 'Feri is learning Angular',
      description: 'But first learn the hard parts of Javascript',
      percent: 75,
      favorite: true
    }
  ]

  updateBox(course: any) {
    this.displayRawJSON = course;
  }
}
