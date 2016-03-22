var myCoolApp = angular.module("myCoolApp", ['ngRoute']);

    // create the controller and inject Angular's $scope
    myCoolApp.controller('mainController', function($scope) {

        // create a message to display in view
        $scope.message = 'Everyone come and see rocks!';
    });


myCoolApp.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .when('/climb', {
      templateUrl: 'views/climb.html',
      controller:  'ClimbController'
    })

    .when('/hike', {
      templateUrl: 'views/hike.html',
      controller:   'HikeController'
    })

    .otherwise({
      redirectTo: '/home'
    })
});
