import './footer.less';

import ng from 'angular';

import FooterComponent from './components';

export default ng.module('app.components.footer', [])
  .directive('appFooter', FooterComponent)
  .name;
