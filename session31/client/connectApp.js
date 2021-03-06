var app = angular.module('connect',['ui.router','ngAnimate']);
//creating a new angular module

//configuration of ui router

app.config(['$stateProvider',routeConfig]);

//parent of all scopes in angular $rootScope

// app.run(['$rootScope',run]);

// function run($rootScope){
// 	//this is parent of all scopes 
// 	//this is the first scope created by angular 
// }

function routeConfig($stateProvider){
  $stateProvider
  .state('dashboard',{
  	url : '/dashboard',
  	templateUrl: 'modules/dashboard/dashboard.html',
  	controller: 'DashboardController'
  })
  .state('leads',{
  	url: '/leads',
  	templateUrl: 'modules/leads/leads.html',
  	controller: 'LeadsController'
  });

}

