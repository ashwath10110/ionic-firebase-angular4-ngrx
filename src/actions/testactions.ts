import { Action } from "@ngrx/store";
import { Meal } from "../reducers/testreducers";
export const ADD_MEAL = "ADD_MEAL";
export const DELETE_MEAL = "DELETE_MEAL";
export const RESET = "RESET";
export class AddMeal implements Action {
	readonly type = ADD_MEAL;
	constructor(public payload: Meal) { }
}
export class DeleteMeal implements Action {
	readonly type = DELETE_MEAL;
	constructor(public payload: any) { }
}
export class ResetMeal implements Action {
	readonly type = RESET;
	constructor(public payload: any) { }
}
export type All = AddMeal | DeleteMeal | ResetMeal;