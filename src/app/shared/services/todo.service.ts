// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// const BASE_URL = 'http://localhost:3000';
// const MODEL = 'ngrx';

// @Injectable({
//   providedIn: 'root',
// })
// export class TodoService {
//   private apiUrl = `${BASE_URL}/${MODEL}`;

//   constructor(private http: HttpClient) {}

//   public getUrl() {
//     return `${BASE_URL}/${MODEL}`;
//   }

//   getTodoList(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl).pipe(
//       map((todos: any[]) => {
//         return todos.map(todo => ({
//           id: todo.id,
//           value: '', // Initialize the value property
//         }));
//       })
//     );
//   }

//   postTodoItem(newTodoItem: any): Observable<any> {
//     return this.http.post(this.apiUrl, newTodoItem);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000';
const MODEL = 'ngrx';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = `${BASE_URL}/${MODEL}`;

  constructor(private http: HttpClient) {}

  public getUrl() {
    return `${BASE_URL}/${MODEL}`;
  }

  getTodoList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((todos: any[]) => {
        return todos.map(todo => ({
          id: todo.id,
          value: '', // Initialize the value property
        }));
      })
    );
  }

  postTodoItem(newTodoItem: any): Observable<any> {
    return this.http.post(this.apiUrl, newTodoItem);
  }
}