import { NgModule } from '@angular/core';
import { biz } from '@biznas/ng-core';
import { config } from '../biz.config';

import { RootComponent } from './root.component';

@NgModule(biz
  .ngModule()
  .root()
  .component(RootComponent)
  .build())
export class RootModule {}