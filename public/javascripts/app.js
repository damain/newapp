var myApp = angular.module('myApp',['ngRoute','myAppControllers']);

myApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl: 'partials/index',
				controller: 'IndexCtrl'
			}).
			when('/adduser',{
				templateUrl: 'partials/adduser'//,
				//controller: 'AddUserCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});


	}]);