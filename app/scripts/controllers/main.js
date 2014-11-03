'use strict';

/**
 * @ngdoc function
 * @name surfyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surfyApp
 */
angular.module('surfyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
