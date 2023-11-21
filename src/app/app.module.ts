import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './items/items.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './shared/services/courses.service';
import { LessonsService } from './shared/services/lessons.service';
import { CourseListComponent } from './courses/courses-list/courses-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    CoursesComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    CoursesService,
    LessonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
