import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FormComponent } from './app/form/form.component';
import { RegformComponent } from './app/regform/regform.component';
// import { AppComponent } from './app/app.component';
// import { StepperformComponent } from './app/stepperform/stepperform.component';

// bootstrapApplication(StepperformComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(FormComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(RegformComponent, appConfig)
  .catch((err) => console.error(err));