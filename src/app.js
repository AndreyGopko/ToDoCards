import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import ng from 'angular';
import UIRouter from 'angular-ui-router';

import Components from './components';
import Containers from './containers';

import Config from './config/router';

ng.module('app', [Components, Containers, UIRouter])
  .constant('API_URL', 'http://localhost:3000')
  .config(Config);
