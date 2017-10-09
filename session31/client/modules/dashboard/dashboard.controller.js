angular.module('connect')
       .controller('DashboardController',DashboardController);


function DashboardController($scope){
	$scope.message = 'This is awesome dashboard';
}