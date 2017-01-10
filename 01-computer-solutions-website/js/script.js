var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
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
