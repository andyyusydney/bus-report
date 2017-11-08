import angular from 'angular';
import uiRouter from 'angular-ui-router';
import list from './components/list.js'

angular.module('app', [uiRouter, list])
	.config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) =>
    {
        $urlRouterProvider.otherwise('/list');
        $locationProvider.html5Mode({ enabled: true }); // TODO: disable the html5 url to resolve the sitecore url issue. However, it breaks facebook redirect back page. 
    }]);