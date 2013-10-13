var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('IndexCtrl',['$scope', '$http',
	function IndexCtrl($scope, $http){
	$http.get('/api/users').
		success(function(data,status,headers,config){
			$scope.users=data;
		});
	}
]);

myAppControllers.controller('AddUserCtrl',['$scope', '$http',
	function AddUserCtrl($scope, $http){
		

	}
	]);