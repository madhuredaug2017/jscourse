
//get the app
var app =  angular.module('connect');
app.controller('TopController',TopController);

function TopController($scope,notifService){
	
	$scope.IsNotificationOpen = false;
	$scope.notifications = [];
	$scope.openNotification = function(){
		$scope.IsNotificationOpen = true;

		notifService.getAlerts().then(function(response){
			//response.data 
			$scope.notifications = transformData(response.data);
		},function(){
			alert('error occurred while fetching notifications');
		});

	}

	$scope.closeNotification = function(){
		$scope.IsNotificationOpen = false;
	}
	$scope.menuItems = [
   
	];
}

var iconMap = {
	message : 'fa-user-plus',
	updates : 'fa-bell',
	settings : 'fa-diamond'
}


function transformData(notifications){
//[] --> []
	//[1,2,3] --> [1,4,6]
	return notifications.map(function(note){
		// note.iconType = iconMap[note.type];
		 note.iconType = iconMap[note.type];
		 note.message = note.count ? note.message.replace('#count',note.count) : note.message;
		 note.messageType = 'text-'+ note.textType;
		 return note;
	});

	// [{
 //        "type": "message",
 //        "textType": "info",
 //        "heading": "New user registered",
 //        "message": "You have #count unread messages",
 //        "count": "10"
 //    }]
}

//TopController.$inject = ['$scope','notifService'];