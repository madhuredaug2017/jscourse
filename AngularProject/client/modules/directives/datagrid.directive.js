angular.module('connect')
       .directive('grid',dataGrid);


function dataGrid(){
	var config = {
		restrict: 'EA',
		templateUrl: 'modules/directives/templates/dataGrid.html',
		scope : {
          list: '='
		},
		controller: DataGridController,
		controllerAs : 'grid',
		bindToController: true

	};

	return config;
}

function DataGridController($scope){
	var grid = this;
	//To avoid adding each of the isolated scope properties to the controller as
	//use bindToController 


}