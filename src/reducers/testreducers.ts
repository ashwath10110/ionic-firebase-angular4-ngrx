import { ActionReducer, Action } from "@ngrx/store";
import * as MealActions from "../actions/testactions";
export type Action = MealActions.All;
export interface Meal {
  id: string;
  title: string;
  content: string;
}
export interface AppState {
  meals: [Meal];
}
export function mealReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case MealActions.ADD_MEAL:
      return [...state, ...action.payload];
    case MealActions.DELETE_MEAL:
      return state.filter(meal => meal.id !== action.payload.id);
    case MealActions.RESET:
      return [];
    default:
      return state;
  }
}