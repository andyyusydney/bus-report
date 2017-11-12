import DetailController from './detail.controller.js';

export default {
    template: `<table class="detail">
      <thead class="detail__header">
      	<tr class="detail__header-row">
      		<th class="detail__header-item">Bus ID</th>
      		<th class="detail__header-item">Route Variant</th>
      		<th class="detail__header-item">Status</th>
      	</tr>
      </thead>
      <tbody class="detail__body">
		  <tr class="detail__body-row" ng-repeat="bus in $ctrl.busInfo.busData">
		    <td class="detail__body-item">{{::bus.busId}}</td>
		    <td class="detail__body-item" ng-bind-html="bus.routeVariant"></td>
		    <td class="detail__body-item {{::bus.deviationFromTimetable | deviationStatus: 'class'}}">{{::bus.deviationFromTimetable | deviationStatus: 'value'}}</td>
		  </tr>
	  </tbody>
	</table>`,
	bindings: {
        name: '<'
    },
    controller: DetailController
};