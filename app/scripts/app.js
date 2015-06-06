'use strict';

/**
 * @ngdoc overview
 * @name reTestApp
 * @description
 * # reTestApp
 *
 * Main module of the application.
 */
angular.module('controllers', []);
angular
  .module('reTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/deezer.html',
        controller: 'MusicCtrl'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });
