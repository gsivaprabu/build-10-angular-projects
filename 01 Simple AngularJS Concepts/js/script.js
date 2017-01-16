var app = angular.module("computer", ['ngRoute']) // Include dependencies here
.config(['$routeProvider', function($routeProvider) {
//Dependency Injection is called when you adding some modules like ngRoute
    $routeProvider.
    when('/main', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
    }).
    when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'MainCtrl'
    }).
    when('/services', {
        templateUrl: 'templates/services.html',
        controller: 'ServicesCtrl'
    }).
    when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
    }).
    otherwise({ redirectTo: '/main' })
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    console.log('$scope', $scope);
    console.log('MainCtrl Called');
    $http.get('data/services.json').then(function(response) {
        $scope.services = response.data;
    })
}])

.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/services.json').then(function(response) {
        $scope.services = response.data;
    })
}])

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/locations.json').then(function(response) {
        $scope.locations = response.data;
    })
}]);
