angular.module('connect')
       .directive('grid',dataGrid);


function dataGrid(){
	var config = {
		restrict: 'EA',
		templateUrl: 'modules/directives/templates/dataGrid.html',
		scope : {
          list: '=',
          count : '=',
          pageSizes: '=',
          pageSize : '=',
          pageNo: '=',
          goto: '&'
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
	grid.count = parseInt(grid.count,10);
	grid.count = isNaN(grid.count) ? 0 : grid.count;

	grid.gotoPage = function(pageNo,size){
		grid.goto({pageNo: pageNo, size: size});
	}
	grid.onPageSizeChange = function(){
		grid.goto({pageNo: grid.pageNo, size: grid.pageSize});
	}
}