import ng from 'angular';

import Header from './header';
import Menu from './menu';
import SideBar from './sideBar';
import Footer from './footer';
import ToDo from './todo';
import Copier from './copier';
import SideBarTable from './sideBarTable';
import TodoRow from './todoRow';

export default ng.module('app.components', [Header, Menu, SideBar, Footer, ToDo, SideBarTable, Copier, TodoRow])
.name;
