import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { ListComponent } from './app/list/list.component';
// import { FilterComponent } from './app/filter/filter.component';
// import { Switchex13Component } from './app/switchex13/switchex13.component';
import { Bookscardex15Component } from './app/bookscardex15/bookscardex15.component';

// bootstrapApplication(Switchex13Component, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(FilterComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(Bookscardex15Component, appConfig)
  .catch((err) => console.error(err));