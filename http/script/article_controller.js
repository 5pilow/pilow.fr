pilow.controller('article_controller', function($scope, $route, $http, $routeParams) {

	$scope.loading = true

	$http.get('/api/article/get/' + $routeParams.id).success(function(data) {
		$scope.article = data.article
		$scope.loading = false
	})
})
