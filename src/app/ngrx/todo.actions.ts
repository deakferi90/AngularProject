import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[Todo] AddItem', props<{ item: string }>());
export const removeItem = createAction('[Todo] RemoveItem', props<{ index: number }>());