import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { TodoService } from '../shared/services/todo.service';

@Injectable()
export class TodoEffects {

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadItems),
      mergeMap(() =>
        this.todoService.getTodoItems().pipe(
          map(items => TodoActions.loadItemsSuccess({ items })),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}