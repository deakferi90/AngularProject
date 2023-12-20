import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './items/items.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses/courses-details/courses-details.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './shared/services/courses.service';
import { LessonsService } from './shared/services/lessons.service';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { counterReducer } from './ngrx/counter.reducer';
import { NgrxComponent } from './ngrx/ngrx.component';
import { ReactiveFormsModule } from '@angular/forms';
import { todoReducer } from './ngrx/todo.reducer';
import { BooksService } from './shared/services/books.service';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CoursesDetailsComponent,
    UsersComponent,
    UsersDetailsComponent,
    NgrxComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer, todo: todoReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    CoursesService,
    BooksService,
    LessonsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
