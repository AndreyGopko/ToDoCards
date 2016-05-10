import template from './todo-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'vmT',
  scope: {
    card: '=',
    row: '='
  },
  require: {
    HomeController: '^^home'
  },
  bindToController: true
});
