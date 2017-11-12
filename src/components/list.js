import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './list.routes.js';
import component from './list.component.js';
import './list.scss';

export default angular.module('list', [])
	.component('list', component)
	.config(routing)
	.name;