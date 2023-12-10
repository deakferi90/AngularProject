import { Component } from '@angular/core';
import { Decrement, Increment, Reset } from './counter.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';;

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.css'
})
export class NgrxComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

    increment() {
      this.store.dispatch(new Increment());
    }

    decrement() {
      this.store.dispatch(new Decrement());
    }

    reset() {
      this.store.dispatch(new Reset());
  }
}