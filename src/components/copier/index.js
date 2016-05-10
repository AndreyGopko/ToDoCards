import './copier.less';

import ng from 'angular';

import CopierComponent from './components';

export default ng.module('app.components.copier', [])
  .directive('copier', CopierComponent)
  .name;
