import template from './sideBar-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'vm',
  require: {
    HomeController: '^^home'
  },
  bindToController: true
});
