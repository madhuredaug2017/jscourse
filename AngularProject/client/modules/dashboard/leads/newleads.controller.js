angular.module('connect')
       .controller('NewLeadsController',NewLeadsController);

function NewLeadsController($scope,leadsService) {
    $scope.leads = [];
    $scope.pageNo = 1;
    $scope.pageSizes=[5,10,15,25,50];
    $scope.pageSize = $scope.pageSizes[0];
    $scope.totalLeads = 0;
    
    
    $scope.getLeads = function(pageNo,size){

          leadsService.getLeads(pageNo,size)
                  .then(function(response){
                  $scope.leads = response.data.leads;
                  $scope.totalLeads = response.data.count;
                  },function(error){
                  alert('error occurred while fetching leads');
                  });
    }

    $scope.getLeads($scope.pageNo,$scope.pageSize);


}

// leadsService.getLeads($scope.pageNo,$scope.pageSize)
//               .then(function(response){
//                 $scope.leads = response.data.leads;
//                 $scope.totalLeads = response.data.count;
//               },function(error){
//                  alert('error occurred while fetching leads');
//               });