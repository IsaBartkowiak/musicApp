/**
 * @ngdoc function
 * @name reTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reTestApp
 */
 (function () {
    'use strict';

angular.module('controllers')
    .controller('MainCtrl', ['$http', function($http){
        var test = this;
        this.newMusic = {};
        test.musics = [];
        $http.get('./musics.json').success(function(data){
            test.musics = data;
        });
        this.addMusic = function() {  	
           test.musics.push(this.newMusic);
           this.newMusic = {};
       };
   }]);

}());
