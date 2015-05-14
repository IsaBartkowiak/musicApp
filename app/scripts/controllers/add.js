'use strict';

/**
 * @ngdoc function
 * @name reTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reTestApp
 */
angular.module('reTestApp')
  .controller('AddCtrl', function(){
    this.product = {};
    this.addProduct = function($scope) {
    console.log($scope);
      $scope.products.push(this.product);
      this.product = {};
    };
});
