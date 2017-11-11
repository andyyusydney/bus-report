import DetailController from './detail.controller.js';

export default {
    template: `<h1>{{::$ctrl.busInfo.organisation}} - {{::$ctrl.busInfo.date}}</h1>
    <table>
      <thead>
      	<tr>
      		<th>Bus ID</th>
      		<th>Route Variant</th>
      		<th>Status</th>
      	</tr>
      </thead>
	  <tr ng-repeat="bus in $ctrl.busInfo.busData">
	    <td>{{::bus.busId}}</td>
	    <td ng-bind-html="bus.routeVariant"></td>
	    <td>{{::bus.deviationFromTimetable | deviationStatus}}</td>
	  </tr>
	</table>`,
	bindings: {
        name: '<'
    },
    controller: DetailController
};