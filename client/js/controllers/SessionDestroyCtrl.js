Blog.controller('SessionDestroyCtrl',
	['$scope', 'AuthService', '$location', function($scope, AuthService, $location) {

  $scope.logout = function () {
    AuthService.logout();
    $scope.$emit('changeState', false);
    $location.path('/');
  };

  $scope.cancel = function() {
		$location.path('/');
	};
}]);	
