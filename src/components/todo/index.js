import './todo.less';
import UIBootstrapModal from 'angular-ui-bootstrap/src/modal';

import ng from 'angular';

import ToDoComponent from './components';
import ToDoService from './services';

export default ng.module('app.components.todo', [UIBootstrapModal])
  .service('ToDoService', ToDoService)
  .directive('todo', ToDoComponent)
  .name;
