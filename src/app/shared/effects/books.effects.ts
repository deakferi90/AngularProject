// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { BooksService } from '../services/books.service';
// import * as todoActions from '../../books/books.actions';
// import { switchMap } from 'rxjs/operators';
// //import { addItem, removeItem } from 'src/app/ngrx/todo.actions';

// @Injectable()
// export class BookEffects {
//   postTodoList$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(
//         todoActions.addItem,
//         todoActions.removeItem
//         // Add more actions if needed
//       ),
//       switchMap(() => this.todoService.postTodoList([])) // Pass your updated state here
//     )
//   );

//   constructor(private actions$: Actions, private todoService: BooksService) {}
// }