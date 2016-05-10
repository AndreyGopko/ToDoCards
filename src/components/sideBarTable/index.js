import './sideBar.less';

import ng from 'angular';

import SideBarTableComponent from './components';
import SideBarTableService from './services';
import UIBootstrapProgress from 'angular-ui-bootstrap/src/progressbar';

export default ng.module('app.components.sideBarTable', [UIBootstrapProgress])
  .service('SideBarTableService', SideBarTableService)
  .directive('sideBarTable', SideBarTableComponent)
  .name;
