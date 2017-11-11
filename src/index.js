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
	  return function(value) {
	  	if (value === null) {
	  		return 'Unknown';
	  	} else if (isNaN(value)) {
			return 'Invalid Value';
	    } else {
	      value = Number(value);
	      if(value < 0) {
	        return 'Early'; 
	      } else if(value >= 0 && value < 300) {
	        return 'On Time';
	      } else if (value >= 300) {
	        return 'Late';
	      }
	    }
	  }
	})
	.service('busService', busService);