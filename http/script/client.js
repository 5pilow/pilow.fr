var pilow = angular.module('pilow', ['ngRoute']);

pilow.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'view/home.html',
		controller  : 'home_controller'
	})
	.when('/article/:id', {
		templateUrl : 'view/article.html',
		controller  : 'article_controller'
	})
	$locationProvider.html5Mode(true)
})

pilow.filter('date', ['$sce', function($sce) {
    return function (timestamp) {
        var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
		var date = new Date(timestamp * 1000)
		var day = date.getDate()
		var month = date.getMonth()
		var year = date.getFullYear()
		var hour = date.getHours()
		var minuts = date.getMinutes()
		if (minuts < 10) minuts = '0' + minuts
		return day + ' ' + months[month] + ' ' + year + " à  " + hour + ":" + minuts
    }
}])

pilow.filter('markdown', ['$sce', function($sce) {
	return function(content) {
		if (!content) return '';
		return $sce.trustAs('html', marked(content));
	}
}])
