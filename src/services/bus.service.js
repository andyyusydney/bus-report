export default class BusService
{
	constructor($http, $q)
	{
		this.$http = $http;
		this.$q = $q;
		this.baseUrl = '../';
		this.orgList = [];
	}
	
	getBusData()
    {
        const request = {
            method: 'GET',
            url: `${ this.baseUrl }data/bus-services-data.json`,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return this.$http(request);
    }
	
	getOrgList()
	{
		const deferred = this.$q.defer();
		let temp;
		
		if (this.orgList.length > 0) {
			deferred.resolve(this.orgList);
		}
		this.getBusData().then((response) => {
			console.log("getOrgList() response=", response);
			this.orgList = response.data.data;
			console.log("this.orgList=", this.orgList);
			this.orgList.map((org) => { // set firt section of value to be bold text.
				org.busData.map((item) => {
					temp = item.routeVariant.split(' ');
					temp = [`<strong>${temp[0]}</strong>`, ...temp];
					temp.splice(1,1);
					item.routeVariant = temp.join();
				})
				org.visible = false;
			});
			deferred.resolve(this.orgList);
		});
		
		return deferred.promise;
	}

	getOrgByName(name)
	{
		const deferred = this.$q.defer();
		
		if (this.orgList.length > 0) {
			deferred.resolve(this.orgList.filter((org)=>(org.organisation === name))[0]);
		}
		this.getOrgList().then((orgList) => {
			console.log("getOrgByName() orgList=", orgList);
			deferred.resolve(this.orgList.filter((org)=>(org.organisation === name))[0]);
		});
		
		return deferred.promise;
	}
}

BusService.$inject = ['$http', '$q'];