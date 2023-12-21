import { createAction, props } from '@ngrx/store';

// Action to add an item to the list
export const addToList = createAction(
  '[Book] Add to List',
  props<{ item: any }>()
);

// Actions related to saving the list to a JSON file
export const saveListToJSON = createAction(
  '[Book] Save List to JSON',
  props<{ list: any[] }>()
);

export const saveListToJSONSuccess = createAction(
  '[Book] Save List to JSON Success'
);

export const saveListToJSONFailure = createAction(
  '[Book] Save List to JSON Failure',
  props<{ error: any }>()
);