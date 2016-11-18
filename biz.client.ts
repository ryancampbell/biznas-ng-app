import { client } from '@biznas/ng-core/client';
import { config } from './biz.config';

import { RootModule } from './src';

client(config).bootstrap(RootModule);
