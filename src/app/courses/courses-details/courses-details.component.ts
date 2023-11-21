import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
  selectedCourse: any = null;
  courses: any = null;
  @Input() course: any;
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
    this.coursesService.update(course).subscribe(() => this.loadCourses());
    } else {
      this.coursesService.create(course).subscribe(() => this.loadCourses());
    }
  }

  loadCourses() {
    return this.coursesService.all().subscribe(data => {
      this.courses = data;
    });
  }

  deleteCourse(courseId : number) {
    return this.coursesService.delete(courseId).subscribe(() => this.loadCourses() && this.resetSelectedCourse());
  }

  cancel() {
    this.resetSelectedCourse();
    this.loadCourses();
  }
}
