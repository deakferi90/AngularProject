import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.actions';
export const initialState : string[] = [];

export const todoReducer = createReducer(
    initialState,
    on(todoActions.addItem, (state, { item }) => [...state, item]),
    on(todoActions.removeItem, (state, { index }) => state.filter((_, i) => i !== index))
);