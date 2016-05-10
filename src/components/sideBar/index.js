import './sideBar.less';

import ng from 'angular';

import SideBarComponent from './components';

export default ng.module('app.components.sideBar', [])
  .directive('sideBar', SideBarComponent)
  .name;
