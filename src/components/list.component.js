import ListController from './list.controller.js';

export default {
    template: `<ul> 
				 <li ng-repeat="org in $ctrl.orgList">
				   <a ng-click="org.visible = !org.visible" ui-sref=".detail({name: org.organisation})">{{::org.organisation}} - {{::org.date}}</a>
				   <detail name="org.organisation" ng-show="org.visible"></detail>
				 </li>
			   </ul>`,
    controller: ListController
};