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
  constructor(public lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.lessons = this.lessonsService.all();
  }

  selectLesson(lesson: Lesson) {
    this.lessons = lesson;
  }
}
