import template from './footer-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'vmf',
  bindToController: true
});
