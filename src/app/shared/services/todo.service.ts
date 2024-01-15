
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoItem } from '../interfaces/todo.interface';
// import { addItem, removeItem } from '../../ngrx/todo.actions';

const BASE_URL = 'http://localhost:3000';
const MODEL = 'ngrx';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = `${BASE_URL}/${MODEL}`;
  private id: number = 0;
  private idCounter = 0;

  constructor(private http: HttpClient) {}

  getId(): number {
    return this.id;
  }

  setId(newId: number): void {
    this.id = newId;
  }

  getCurrentId(): number {
    return this.id;
  }

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

  addTodoItem(item: TodoItem): Observable<TodoItem> {
    const newItem = { ...item, id: ++this.idCounter };
    return this.http.post<TodoItem>(this.apiUrl, newItem);
  }

  removeTodoItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  postTodoItem(newTodoItem: any): Observable<any> {
    return this.http.post(this.apiUrl, newTodoItem);
  }
}