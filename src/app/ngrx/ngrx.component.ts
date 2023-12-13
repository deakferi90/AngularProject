import { Component } from '@angular/core';
import { decrement, increment, reset } from './counter.actions';
import { addItem, removeItem } from './todo.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.css'
})
export class NgrxComponent {
  count$!: Observable<number>;
  todoList!: string[];
  newItem!: string;

  constructor(private store: Store<{ count: number, todo: string[] }>) {
    this.count$ = store.pipe(select('count'));
    store.select('todo').subscribe(todo => this.todoList = todo);
  }

    increment() {
      this.store.dispatch(increment());
    }

    decrement() {
      this.store.dispatch(decrement());
    }

    reset() {
      this.store.dispatch(reset());
  }

  addItem() {
    this.store.dispatch(addItem({ item: this.newItem }));
    this.newItem = ''; // clear the input field
  }

  removeItem(index: number) {
    this.store.dispatch(removeItem({ index }));
  }
}