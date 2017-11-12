import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './detail.routes.js';
import component from './detail.component.js';
import './detail.scss';

export default angular.module('detail', [])
	.component('detail', component)
	.config(routing)
	.name;