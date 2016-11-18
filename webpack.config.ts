import { config } from './biz.config';
import { webpackConfig } from '@biznas/ng-core/webpack-config';

export default webpackConfig(config).build();
