import angular from 'angular';
import uiRouter from 'angular-ui-router';
import list from './components/list.js';
import detail from './components/detail.js';
import busService from './services/bus.service.js';

angular.module('app', [uiRouter, list, detail, require('angular-sanitize')])
	.config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) =>
    {
        $urlRouterProvider.otherwise('/list');
        //$locationProvider.html5Mode({ enabled: true }); // TODO: disable the html5 url to resolve the sitecore url issue. However, it breaks facebook redirect back page. 
    }])
    .filter('deviationStatus', function() {
	  return function(value, target) {
	  	if (value === null) {
	  		return target === 'value'?'Unknown':'unknown';
	  	} else if (isNaN(value)) {
			return target === 'value'?'Invalid Value':'invalid';
	    } else {
	      value = Number(value);
	      if(value < 0) {
	        return target === 'value'?'Early':'early'; 
	      } else if(value >= 0 && value < 300) {
	        return target === 'value'?'On Time':'on-time';
	      } else if (value >= 300) {
	        return target === 'value'?'Late':'late';
	      }
	    }
	  }
	})
	.service('busService', busService);