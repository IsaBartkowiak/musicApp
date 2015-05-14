'use strict';

/**
 * @ngdoc overview
 * @name reTestApp
 * @description
 * # reTestApp
 *
 * Main module of the application.
 */
angular
  .module('reTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });
