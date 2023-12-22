import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.actions';

export interface TodoItem {
    id: number;
    item: string;
  }

export const initialState : string[] = [];

export const todoReducer = createReducer(
    initialState,
    on(todoActions.addItem, (state, { value }) => [...state, value]),
    on(todoActions.removeItem, (state, { index }) => state.filter((_, i) => i !== index))
);