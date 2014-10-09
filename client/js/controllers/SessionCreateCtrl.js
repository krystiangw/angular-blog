Blog.controller('SessionCreateCtrl',
	['$scope','AuthService', '$location', function($scope, AuthService, $location) {
  $scope.credentials = {
    email: '',
    password: ''
  };

  $scope.login = function (credentials) {
  	console.log('login func');
    AuthService.login(credentials)
    .then(function (response) {
    	console.log("zalogowano");
      $scope.$emit('changeState', true);
      $location.path('/post/create')
    },
    function (error) {
    	console.log('error: ', error);
    }
    );
  };

  

}]);	
