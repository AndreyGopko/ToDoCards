import template from './sideBarTable-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'vmS',
  require: {
    HomeController: '^^home'
  },
  bindToController: true
});
