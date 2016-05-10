import template from './home-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'homeVm',
  bindToController: true
});
