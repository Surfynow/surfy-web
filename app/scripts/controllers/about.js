'use strict';

/**
 * @ngdoc function
 * @name surfyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the surfyApp
 */
angular.module('surfyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
