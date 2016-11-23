import { NgModule } from '@angular/core';
import { biz } from '@biznas/ng-core';
import { config } from '../biz.config';

import { AppComponent } from './app.component';

@NgModule(biz
  .ngModule()
  .root()
  .component(AppComponent)
  .build())
export class AppModule {}
