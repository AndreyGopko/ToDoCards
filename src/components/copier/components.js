import template from './copier-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'vmC',
  scope: {
    onAdd: '&',
    size: '@'
  },
  bindToController: true
});
