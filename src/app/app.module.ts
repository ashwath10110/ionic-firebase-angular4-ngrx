import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StoreModule } from "@ngrx/store";
import { mealReducer } from '../reducers/testreducers';
// import {  } from '../actions/testactions';
import { ROOT_REDUCER } from './../reducers/reducers';

export const config = {
  apiKey: "AIzaSyCfhMtKkY-H7DHKTCNiYs2AVNroXQz7M6A",
  authDomain: "mytown-7a1f4.firebaseapp.com",
  databaseURL: "https://mytown-7a1f4.firebaseio.com",
  projectId: "mytown-7a1f4",
  storageBucket: "mytown-7a1f4.appspot.com",
  messagingSenderId: "1038079560474"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(ROOT_REDUCER),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule { }
