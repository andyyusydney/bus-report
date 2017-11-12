import ListController from './list.controller.js';

export default {
    template: `<ul class="org"> 
				 <li class="org__listItem" ng-repeat="org in $ctrl.orgList">
				   <a class="org__link" ng-click="org.visible = !org.visible" ui-sref=".detail({name: org.organisation})">{{::org.organisation}} - {{::org.date}}</a>
				   <detail name="org.organisation" ng-show="org.visible"></detail>
				 </li>
			   </ul>`,
    controller: ListController
};