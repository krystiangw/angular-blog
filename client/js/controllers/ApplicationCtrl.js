Blog.controller('ApplicationCtrl',
	['$scope','AuthService', function($scope, AuthService) {
		// console.log("ApplicationCtrl");
		
		$scope.isLoggedIn = AuthService.isAuthenticated();
		$scope.$on('changeState',function(event, data){
			console.log("wylapalem: ", event, data);
			$scope.isLoggedIn = data;
		});
	}
]);	