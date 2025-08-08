import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

console.log('main.ts loaded');

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => console.log('Angular app bootstrapped successfully'))
  .catch(err => {
    console.error('Error bootstrapping Angular app:', err);
  });