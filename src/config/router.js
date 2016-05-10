export default ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('menu', {
      url: '/',
      template: '<h1>Global menu</h1>',
      controller() {
        this.items = [1, 2, 3, 4, 5];
      },
      controllerAs: 'vm'
    })
    .state('menu1', {
      url: '/menu1',
      template: `<h1>Container</h1>
      <a ui-sref=".info">Info</a>
      <a ui-sref=".about">About</a>
      <ui-view></ui-view>`
    })
    .state('menu2', {
      url: '/menu2',
      template: '<h1>menu2</h1>'
    })
    .state('menu3', {
      url: '/menu3',
      template: '<h1>menu3</h1>'
    })
    .state('menu4', {
      url: '/menu4',
      template: '<h1>menu4</h1>'
    })
    .state('menu1.info', {
      url: '/info',
      template: '<h3>Info</h3><p>This is info</p>'
    })
    .state('menu1.about', {
      url: '/about',
      template: '<h3>About</h3><p>This is about us</p><a ui-sref="menu1">Back</a>'
    });
};
