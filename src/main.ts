import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrapping standalone Angular application
// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

// bootstrapping Angular application with Angular modules (or mixture of it and standalone components)
platformBrowserDynamic().bootstrapModule(AppModule);
