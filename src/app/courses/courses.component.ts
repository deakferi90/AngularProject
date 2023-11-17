import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

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
  selectedCourse: any = null;
  courses: any = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.coursesService.all().subscribe(data => {
      this.courses = data;
    });
  }

  resetSelectedCourse() {
    
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percent: 0,
      favorite: false
    };

    this.selectedCourse = emptyCourse;
  }

  updateBox(course: any) {
    this.selectedCourse = course;
  }

  selectedCourseTwo(course: (course: any) => void) {
    this.selectedCourse = course;
  }

  // deleteItem(course: any) {
  //   const index = this.coursesService.courses.findIndex(item => item.id === course.id);
  //   if (index !== -1) {
  //     this.coursesService.courses.splice(index, 1);
  //   }
  //   this.resetSelectedCourse();
  //   return this.coursesService.courses;
  // }

  // deleteItem(course: any) {
  //   this.coursesService.delete(course.id).subscribe(() => {
  //     // Refresh the courses list after deletion
  //     this.coursesService.all().subscribe(data => {
  //       this.courses = data;
  //       this.resetSelectedCourse();
  //     });
  //   });
  // }

  saveCourse(course: { id: any; }) {
    if(course.id) {
    this.coursesService.update(course);
    } else {
      this.coursesService.create(course);
    }
  }

  deleteCourse(courseId : any) {
    const index = this.courses.findIndex((item: { id: any; }) => item.id === courseId);

    if (index !== -1) {
      this.courses.splice(index, 1);
    }

    return this.courses;
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
