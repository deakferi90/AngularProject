import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CourseListComponent {
  @Input() courses: any[] | undefined;
  @Output() updateBox = new EventEmitter<any>();
  @Output() deleteCourse = new EventEmitter<number>();
}