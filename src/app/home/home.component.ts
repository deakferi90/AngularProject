import { Component, OnInit } from '@angular/core';
import { Lesson } from './home.interface';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Hello Workshop';
  themeColor = 'blue';
  currentLesson: Lesson | null = null;
  lessons: any = null;

  //step 1 create lessons service
  //hint ng g shared/services/lessons
  //step 2 add the lessons service to app.module
  //step 3 inject lessons service into component
  //step 4 move lessons to a service and consume in component
  constructor(public lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.lessons = this.lessonsService.all();
  }

  selectLesson(lesson: Lesson) {
    this.lessons = lesson;
  }
}
