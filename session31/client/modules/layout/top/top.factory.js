angular.module('connect')
	   .factory('notifService',notificationService);

//provider vs factory vs service 

//return a object (factory)
function notificationService($http){

	var service = {
		getAlerts : getAlerts
	};
	return service;

	function getAlerts(){
		return $http({
			method : 'GET',
			url : '/api/alerts'
		});
	}



}
