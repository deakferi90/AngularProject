import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input() selectedCourse: any;
  @Output() saveCourse = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
}