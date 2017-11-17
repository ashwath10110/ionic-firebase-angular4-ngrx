import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';

import { Store } from "@ngrx/store";
import * as MealActions from "./../../actions/testactions";
import { AppState } from './../../reducers/testreducers';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {}

  // form: any = {
  //   title: "",
  //   content: ""
  // };
  // meals: Observable<any>;
  // constructor(public navCtrl: NavController, private store: Store<AppState>) {
  //   this.meals = store.select<any>("meals");
  // }
  // addMeal() {
  //   let id = Math.random().toString(36).substr(2, 10);
  //   this.store.dispatch(
  //     new MealActions.AddMeal({
  //       id: id,
  //       title: this.form.title,
  //       content: this.form.content
  //     })
  //   );
  // }
  // removeMeal(_meal) {
  //   this.store.dispatch(new MealActions.DeleteMeal({ id: _meal.id }));
  // }
  // resetMeals() {
  //   this.store.dispatch(new MealActions.ResetMeal({}));
  // }

  /**
   * Calls the authentication provider and logs the user out, on successful logout it sends the user
   * back to the login page.
   */
  logMeOut() {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

}
