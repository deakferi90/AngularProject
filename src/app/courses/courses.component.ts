import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.displayRawJSON = emptyCourse;
  }

  updateBox(course: any) {
    this.displayRawJSON = course;
  }

  selectedCourse(course: (course: any) => void) {
    this.selectedCourse = course;
  }

  deleteItem(course: any) {
    const index = this.courses.findIndex(item => item.id === course.id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
    return this.courses;
  }

  saveCourse() {
    console.log('save course');
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
