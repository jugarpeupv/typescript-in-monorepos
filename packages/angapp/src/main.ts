import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { nonBuildableLib } from '@repo/non-buildable-lib';

nonBuildableLib();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
