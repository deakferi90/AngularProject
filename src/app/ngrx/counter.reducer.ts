// // // import { Action } from "@ngrx/store";
// // // import { ActionTypes } from "./counter.actions";

// // // export const initialState = 0;

// // // export function counterReducer(state = initialState, action: Action) {
// // //   switch (action.type) {
// // //     case ActionTypes.Increment:
// // //       return state + 1;
// // //     case ActionTypes.Decrement:
// // //       return state - 1;
// // //     case ActionTypes.Reset:
// // //       return initialState;
// // //     default:
// // //       return state;
// // //   };
// // // }

// // // export function counterReducer(state = initialState, action: Action): number {
// // //   switch (action.type) {
// // //     case ActionTypes.Increment:
// // //       return state + 1;
// // //     case ActionTypes.Decrement:
// // //       return state - 1;
// // //     case ActionTypes.Reset:
// // //       return initialState; // Reset to the initial state
// // //     default:
// // //       return state; // Return the current state for unknown actions
// // //   }
// // // }

// // // import { Action } from "@ngrx/store";
// // // import { ActionTypes } from "./counter.actions";

// // // export const initialState = 0;

// // // export function counterReducer(state = initialState, action: Action) {
// // //   switch (action.type) {
// // //     case ActionTypes.Increment:
// // //       return state + 1;
// // //     case ActionTypes.Decrement:
// // //       return state - 1;
// // //     case ActionTypes.Reset:
// // //       return initialState;
// // //     default:
// // //       return state;
// // //   };
// // // }

// // import { Action } from "@ngrx/store";
// // import { ActionTypes } from "./counter.actions";

// // export const initialState = 0;

// // export function counterReducer(state = initialState, action: Action) {
// //   switch (action.type) {
// //     case ActionTypes.Increment:
// //       return state + 1;
// //     case ActionTypes.Decrement:
// //       return state - 1;
// //     case ActionTypes.Reset:
// //       return initialState;
// //     default:
// //       return state;
// //   };
// // }

import { createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(counterActions.increment, (state) => state + 1),
  on(counterActions.decrement, (state) => state - 1),
  on(counterActions.reset, () => initialState)
);