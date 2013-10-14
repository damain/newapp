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
		console.log("adduserctrl fired");
		
		$scope.submit = function(){
			$http.post('/api/users', $scope.form).
			success(function(data,status,headers,config){
				console.log(data);
				console.log(status);
			});
		}

	}
	]);