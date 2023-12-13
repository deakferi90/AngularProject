import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.actions';
export const initialState: string[] = [];

export const todoReducer = createReducer(
    initialState,
    //   on(addItemActions.addItem, (state) => state),
    //   on(addItemActions.removeItem, (state) => state),
    on(todoActions.addItem, (state, { item }) => [...state, item]),
    on(todoActions.removeItem, (state, { index }) => state.filter((_, i) => i !== index))
);