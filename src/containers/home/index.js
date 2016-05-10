import ng from 'angular';

import HomeComponent from './components';

export default ng.module('app.containers.home', [])
  .directive('home', HomeComponent)
  .name;
