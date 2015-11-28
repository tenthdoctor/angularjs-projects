'use strict';

// Declare app level module which depends on views, and components
angular.module('webtemplateStore', [
  'ngRoute',
  'webtemplateStore.view1',
  'webtemplateStore.view2',
  'webtemplateStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
