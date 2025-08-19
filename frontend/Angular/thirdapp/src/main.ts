import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
// import { NgClassEx2Component } from './app/ng-class-ex2/ng-class-ex2.component';
// import { NgStyleEx4Component } from './app/ng-style-ex4/ng-style-ex4.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
