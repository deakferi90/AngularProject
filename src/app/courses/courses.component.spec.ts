import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CoursesService } from '../shared/services/courses.service';
import { DebugElement } from '@angular/core';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesService: CoursesService;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [HttpClientModule, MatCardModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    coursesService = de.injector.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call courseService.delete on delete', () => {
    spyOn(coursesService, 'delete').and.callThrough();
    component.deleteCourse(1);
    expect(coursesService.delete).toHaveBeenCalledWith(1);
  })
});
