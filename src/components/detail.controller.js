export default class DetailController
{
    constructor (busService)
    {
		this.busService = busService;
		this.busInfo = {};
    }
	
	$onInit (){
		this.busService.getOrgByName(this.name).then((data) => {
			this.busInfo = data;
		});
	}
}

DetailController.$inject = ['busService'];