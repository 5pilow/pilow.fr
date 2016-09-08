pilow.controller('article_controller', function($scope, $route, $http, $routeParams, $document) {

	$scope.loading = true

	$http.get('/api/article/get/' + $routeParams.id).success(function(data) {
		$scope.article = data.article
		$scope.loading = false

		setTimeout(function() {
			var images = document.getElementById('article-content').getElementsByTagName('img')
			for (var i = 0; i < images.length; ++i) {
				images[i].src = 'articles/' + $scope.article.id + '/' + images[i].attributes.src.nodeValue
			}
		})
	})
})
