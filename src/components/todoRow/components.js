import template from './todorow-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  scope: {
    row: '='
  },
  controllerAs: 'vmTR',
  bindToController: true
});
