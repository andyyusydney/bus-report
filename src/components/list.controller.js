export default class ListController
{
    constructor (busService)
    {
		this.busService = busService;
		this.orgList = [];
    }
	
	$onInit (){
		this.busService.getOrgList().then((data) => {
			console.log("org data=", data);
			this.orgList = data;
		});
	}
}

ListController.$inject = ['busService'];