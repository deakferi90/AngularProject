import { Component, OnInit } from '@angular/core';
import { Lesson } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Hello Workshop';
  themeColor = 'blue';
  currentLesson: Lesson | null = null;

  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectLesson(lesson: Lesson) {
    console.log('select lesson fired', lesson);
    this.currentLesson = lesson;
  }
}
