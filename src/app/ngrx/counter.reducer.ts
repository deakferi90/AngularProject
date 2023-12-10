// import { createReducer, on } from '@ngrx/store';
// import * as CounterActions from './counter.actions';

import { Action } from "@ngrx/store";
import { ActionTypes } from "./counter.actions";

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;
    case ActionTypes.Decrement:
      return state - 1;
    case ActionTypes.Reset:
      return initialState;
    default:
      return state;
  };
}

// export function counterReducer(state = initialState, action: Action): number {
//   switch (action.type) {
//     case ActionTypes.Increment:
//       return state + 1;
//     case ActionTypes.Decrement:
//       return state - 1;
//     case ActionTypes.Reset:
//       return initialState; // Reset to the initial state
//     default:
//       return state; // Return the current state for unknown actions
//   }
// }