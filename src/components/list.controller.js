export default class ListController
{
    constructor (busService, $stateParams)
    {
		this.busService = busService;
		this.orgList = [];
		this.currentOrg = $stateParams.name;
    }
	
	$onInit (){
		this.busService.getOrgList().then((data) => {
			this.orgList = data;
			this.orgList.map((org) => {
				if (org.organisation === this.currentOrg)
					org.visible = true;
			});
		});
	}
}

ListController.$inject = ['busService', '$stateParams'];