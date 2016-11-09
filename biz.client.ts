import { biz } from '@biznas/ng-core';
import { config } from './biz.config';

import { RootModule } from './src';

biz.client(config).bootstrap(RootModule);