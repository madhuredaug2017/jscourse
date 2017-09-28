
var loginApp = angular.module('loginApp',[]);

//create a module 
//create a angular module angular.module('appName',[]);
//get already created module 

//setter or create 
//angular.module('appName',[]);

//getter 
//angular.module('appName');


//one file we will create the app
//we just to get the app already created
loginApp.controller('LoginController',LoginController);

//we have to store some thing in the user's computer 
//cookie
//localStorage (html5)
function LoginController($scope){
	var userLoggedIn = localStorage.getItem('connectLoggedIn');

	var isLoginExpired = true;
	if(userLoggedIn){
		var alreadyLoggedInTime = localStorage.getItem('loginTime');
		alreadyLoggedInTime = Number(alreadyLoggedInTime);
		var currentTime = new Date().getTime();

		isLoginExpired = ((currentTime - alreadyLoggedInTime) < (10 * 60 * 1000))
							 ? false: true;
    }


	if(isLoginExpired){
		$scope.isLoggedIn = false;
	}else{
		$scope.isLoggedIn = true;
	}
	
	$scope.login = {};
	$scope.doLogin = function(e){
		var username = $scope.login.username;
		var password = $scope.login.password;

		if(username === 'demo' && password === 'demo'){
			var loginTime = new Date().getTime();//time in milliseconds
			//epoch
			$scope.isLoggedIn = true;
			localStorage.setItem('connectLoggedIn',true);
			localStorage.setItem('loginTime',loginTime);
		}
		e.preventDefault();
	}
	//milliseconds jan 1  1970, 00:00:00 -- 0
	//epoch

}