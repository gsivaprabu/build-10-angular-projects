'use strict';

/**
 * @ngdoc function
 * @name pnChatApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pnChatApp
 */
 angular.module('pnChatApp')
 .controller('JoinCtrl', ['$scope', '$rootScope', '$location', 'PubNub', function ($scope, $rootScope, $location, PubNub) {
 	console.log('JoinCtrl Initialized...');

 	$scope.data = {
 		username: 'User_' + Math.floor(Math.random() * 1000)
 	};

 	$scope.join = function() {
 		console.log('Joining... ');

 		var _ref, _ref1;
 		if (!$rootScope.data) {
 			$rootScope.data = {};
 		}
 		// $rootScope.data || ($rootScope.data = {});
 		$rootScope.data.username = (_ref = $scope.data) !== null ? _ref.username : void 0;
 		$rootScope.data.city = (_ref1 = $scope.data) !== null ? _ref1.city : void 0;
 		$rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username;
 		console.log($rootScope);

 		PubNub.init({
 			subscribe_key: 'sub-c-8a6ca26c-86f0-11e5-a04a-0619f8945a4f',
 			publish_key: 'pub-c-b459b944-bc75-45b4-b5d0-092bdaac103b',
 			uuid: $rootScope.data.uuid
 		});

 		return $location.path('/main');
 	};
 }]);
