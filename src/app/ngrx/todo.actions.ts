import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[Todo] AddItem', props<{ id: number; value: string }>());
export const removeItem = createAction('[Todo] RemoveItem', props<{ index: number }>());