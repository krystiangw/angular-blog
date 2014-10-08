Blog.controller('SessionDestroyCtrl',
	['$scope', 'AuthService', function($scope, AuthService) {

  $scope.logout = function () {
  	console.log("wylogowano");
    AuthService.logout();
    $scope.$emit('changeState', false);
  };
	
	}
]);	
