import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { SecondcompcommandComponent } from './app/secondcompcommand/secondcompcommand.component';
import { LoginComponent } from './app/login/login.component';
import { ThirdComponent } from './app/third/third.component';

bootstrapApplication(ThirdComponent, appConfig)
  .catch((err) => console.error(err));
