import ListController from './list.controller.js';

export default {
    template: `<ul ng-repeat="org in $ctrl.orgList"> 
				<li>{{org}}</li>
				</ul>`,
    controller: ListController
};