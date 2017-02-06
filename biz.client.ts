import { BizClient } from '@biznas/ng-core/src/biz';
import { config } from './biz.config';

import { AppModule } from './src';

new BizClient(config).bootstrap(AppModule);
