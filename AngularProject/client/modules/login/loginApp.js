
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
		startMainApp();
		return;
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
			startMainApp();
		}
		e.preventDefault();
	}
	//milliseconds jan 1  1970, 00:00:00 -- 0
	//epoch

}

function startMainApp(){
	var appEl = document.getElementById('ConnectApp');
	var logEl = document.getElementById('loginApp');

	//dom way of adding and removing class
	appEl.classList.remove('hidden');
	logEl.classList.add('hidden');
	//angular contains jquery lite 
	//lighter version of jquery

	//programatically you want to attach an angular app to a html element 
	angular.bootstrap(appEl,['connect']);

	//angular.bootstrap

}