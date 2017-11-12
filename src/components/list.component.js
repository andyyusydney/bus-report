import ListController from './list.controller.js';

export default {
    template: `<ul class="org"> 
				 <li class="org__listItem" ng-repeat="org in $ctrl.orgList">
				   <a class="org__link" ng-click="org.visible = !org.visible" ui-sref=".detail({name: org.organisation})">{{::org.organisation}} - {{::org.date}}</a><span class="org__link-icon"><i class="fa" ng-class="{'fa-caret-square-o-up':org.visible, 'fa-caret-square-o-down':!org.visible}" aria-hidden="true"></i></span>
				   <detail name="org.organisation" ng-show="org.visible"></detail>
				 </li>
			   </ul>`,
    controller: ListController
};