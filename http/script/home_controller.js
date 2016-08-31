pilow.controller('home_controller', function($scope, $route, $http) {

	$http.get('/api/article/get-last').success(function(data) {
		console.log(data)
		$scope.articles = data.articles
	})
})
