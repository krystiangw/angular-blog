Blog.controller('SessionCreateCtrl',
	['$scope','AuthService', function($scope, AuthService) {
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
    },
    function (error) {
    	console.log('error: ', error);
    }
    );
  };

  

}]);	
