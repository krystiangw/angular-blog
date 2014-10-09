Blog.controller('ApplicationCtrl',
	['$scope','AuthService', function($scope, AuthService) {
		
		$scope.isLoggedIn = AuthService.isAuthenticated();

		// Events from session create and session destroy events
		$scope.$on('changeState',function(event, data){
			$scope.isLoggedIn = data;
		});


		$scope.alert = {type: 'danger', msg:'Test alert'};

		$scope.$on('showAlert', function(event, data){
			$scope.alert = data;
		});

	}
]);	