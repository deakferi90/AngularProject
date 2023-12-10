import { Component } from '@angular/core';
import { decrement, increment, reset } from './counter.actions';
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
      this.store.dispatch(increment());
    }

    decrement() {
      this.store.dispatch(decrement());
    }

    reset() {
      this.store.dispatch(reset());
  }
}