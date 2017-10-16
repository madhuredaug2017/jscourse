angular.module('connect')
       .directive('pagination',pagination);

function pagination(){
	var config = {
		restrict: 'EA',
		templateUrl: 'modules/directives/templates/pagination.html',
		scope : {
          count: '=',//count of records
          size : '=', //total size to be displayed on a page 
          currentPage: '=',
          goto : '&'

		},
		controller: PaginationController,
		controllerAs : 'page',
		bindToController: true

	};
	return config;
}

PaginationController.$inject = ['$scope'];

function PaginationController($scope){
	//page 1 
	var page = this;
	//understand more by code 
	updatePage(page);

	page.gotoPage = function(pageNo){
      if(pageNo >= 1 && pageNo <= page.total){
      	page.currentPage = pageNo;
      	//page.goto(pageNo,size);
      	var params = {pageNo: pageNo, size: page.size};
      	page.goto(params);
      	updatePage(page);
      }
	}

   $scope.$watch(function(){
   	return page.size;
   },function(newValue,oldValue){
   	  if(newValue !== oldValue){
   	  	 page.size = parseInt(newValue,10);
        updatePage(page);
   	  }
     
   });

   $scope.$watch(function(){
   	return page.count;
   },function(newValue,oldValue){
   	  if(newValue !== oldValue){
       updatePage(page);
      }
   });

}
//get that page records 

//gotopage 
function updatePage(page){
	//pagesize 5
	//current  (1 -->) 1 to 5, 2 (6 to 10), 3(11 to 15) 4 (16 to 20) 
	page.start = ((page.currentPage - 1) * page.size) + 1;
	var end = page.start + (page.size - 1); //20 -- 17 
	page.end = (end > page.count) ? page.count : end;
	//count of records
	//page size 
	//total pages = noof records/size
	//Math.ceil
	page.total = Math.ceil(page.count/page.size);// 57/10 5.7
	page.maxPages = new Array(page.total);// [ , ,, ]
}