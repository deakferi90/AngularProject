import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  //challenge
  //step 1: complete remote update call
  //step 2: complete remote delete call
  //step 3: fix UI on completed operation
  selectedCourse: any = null;
  courses: any = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
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

  saveCourse(course: { id: any; }) {
    if(course.id) {
    this.coursesService.update(course);
    } else {
      this.coursesService.create(course).subscribe(result => this.loadCourses());
    }
  }

  loadCourses() {
    return this.coursesService.all().subscribe(data => {
      this.courses = data;
    });
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
