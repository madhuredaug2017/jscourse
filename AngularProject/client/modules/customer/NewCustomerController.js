angular.module('connect')
       .controller('NewCustomerController',NewCustomerController);

NewCustomerController.$inject = ['$scope'];

function NewCustomerController($scope) {
  
  $scope.save = function($event,formValid,formDirty){

  	$event.preventDefault();
  	if(formValid && formDirty){
  		//call a service and save the data
  		alert('data saved!!');
  	}else{
  		alert('data invalid or not touched so not saved');
  	}

  }
}