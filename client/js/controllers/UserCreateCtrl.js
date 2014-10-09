Blog.controller('UserCreateCtrl',
	['$scope', 'User', function($scope, User) {
		$scope.user = {
			email: '',
			password:''
		}
	}
]);	
