angular.module('connect')
       .controller('DashboardController',DashboardController);

	   

 DashboardController.$inject = ['$scope','$state'];

function DashboardController($scope,$state){
	$scope.message = 'This is awesome dashboard';

	$scope.displayNewLeads = function(){
		$state.go('dashboard.leads');
	}

	$scope.displayNewProspects = function(){
 	   $state.go('dashboard.prospects');
	}
}
//deeplinking we can bookmark particular url and automatically our routing will
//display that particular part of the page