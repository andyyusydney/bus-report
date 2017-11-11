export default class BusService
{
	constructor($http, $q)
	{
		this.$http = $http;
		this.$q = $q;
		this.baseUrl = '../';
		this.orgList = [];
	}

	test() {
		return ['aaa'];
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
		
		if (this.orgList.length > 0) {
			deferred.resolve(this.orgList);
		}
		this.getBusData().then((response) => {
			console.log("getOrgList() response=", response);
			this.orgList = response.data.data.map(orgObj => orgObj.organisation);
			console.log("this.orgList=", this.orgList);
			deferred.resolve(this.orgList);
		});
		
		return deferred.promise;
	}
}

BusService.$inject = ['$http', '$q'];