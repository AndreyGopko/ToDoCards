import ng from 'angular';

import TodoRowComponent from './components';

export default ng.module('app.components.todoRow', [])
  .directive('todoRow', TodoRowComponent)
  .name;
