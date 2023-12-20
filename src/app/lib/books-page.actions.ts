import { createAction, props } from "@ngrx/store";

export const enter = createAction('[Books Page] Enter');
export const selectBook = createAction('[Books Page] Select a book', props<{bookId: string}>);
export const createBook = createAction('[Books Page] Create a book', props<{book: object}>);
export const updateBook = createAction('[Books Page] Update a book', props<{bookId: string; changes: any}>);
export const deleteBook = createAction('[Books Page] Delete a book', props<{bookId: string}>);