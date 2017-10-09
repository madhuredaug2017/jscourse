angular.module('connect')
       .controller('NewLeadsController',NewLeadsController);


function NewLeadsController($scope,leadsService) {
	$scope.leads = [];
	$scope.pageNo = 1;
	$scope.pageSize = 10;

   leadsService.getLeads($scope.pageNo,$scope.pageSize)
               .then(function(leads){
               	 $scope.leads = leads.data;
               },function(error){
               		alert('error occurred while fetching leads');s
               });


}