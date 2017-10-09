var app =  angular.module('connect');
app.controller('SidebarController',SidebarController);

function SidebarController($scope,$state,$location){
  $scope.menuItems = getMenuItems();
  //$scope.activeIndex = 0;

  $scope.selectedMenu = function(index,menuItem){
  		LoadItem(index,menuItem);
  }

  function LoadItem(index,menuItem){
  	$scope.activeIndex = index;
  	$state.go(menuItem.path);
  }


  if($location.$$url === ''){
  	LoadItem(0,$scope.menuItems[0]);
  	//$state.go($scope.menuItems[0].path);
  }else{
  	var currentPath = $location.$$url;

  	for(var i = 0; i < $scope.menuItems.length; i++){
  		var item = $scope.menuItems[i];
  		if(currentPath === '/'+item.path){
  			$scope.activeIndex = i;
  		}
  	}

  }


}

function getMenuItems(){
	var menuItems = [
		{name: 'Dashboard', path: 'dashboard', authorizedUsers:'all'},
		{name: 'Leads', path: 'leads', authorizedUsers:'fieldUsers,admin'},
		{name: 'Prospects', path: 'prospects', authorizedUsers:'fieldUsers,admin'},
		{name: 'Customers', path: 'customers', authorizedUsers:'fieldUsers,admin'}
	];

	return menuItems;
	//hardcoding -- values in the code to test it 

	//authentication == login is successfull (username, password)
	//authorization === role, what role he is, manager
}



