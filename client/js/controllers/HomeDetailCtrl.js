Blog.controller('HomeDetailCtrl',
	['$scope','Post', function($scope, Post) {
		Post.get()
		.then(function(results){
			$scope.posts = results;
			
		});

	}
]);	
