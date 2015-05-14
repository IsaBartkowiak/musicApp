'use strict';

/**
 * @ngdoc function
 * @name reTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reTestApp
 */
angular.module('reTestApp')
  .controller('MainCtrl', ['$http', function($http){
    var test = this;
    this.newMusic = {};
    test.musics = [];
    $http.get('./musics.json').success(function(data){
        test.musics = data;
    });
    this.addMusic = function() {  	
    	console.log(this.newMusic);
    	test.musics.push(this.newMusic);
    	this.newMusic = {};
    };
  }]);
