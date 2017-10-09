angular.module('connect')
       .controller('LeadsController',LeadsController);


function LeadsController($scope){
	$scope.leadsMessage = 'This is awesome leads page';
}