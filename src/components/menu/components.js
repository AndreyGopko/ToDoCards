import template from './menu-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'vmM',
  bindToController: true
});
