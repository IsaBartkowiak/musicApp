/**
 * @ngdoc function
 * @name reTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reTestApp
 */
 (function () {
 	'use strict';

 	var APP_ID = '156241';
 	var CHANNEL_URL = './channel.html';


 	angular.module('controllers')
 	.controller('MusicCtrl', ['$http', '$rootScope', '$scope', function($http, $rootScope, $scope){
 		$rootScope.title = 'DZ';
 		$scope.playing;
 		$scope.tracksInfo = {};
 		var music = this;
 		music.tracks = [];
 		//---- récupération des données
 		$http.get('../../musics.json').success(function(data){
 			music.tracks = data;
 		});
 		//Tri des valeurs

 		//--- init deezer
 		DZ.init({
 			appId: APP_ID,
 			channelUrl: CHANNEL_URL,
 			player:{

 			}
 		});

 		//--- récupération des données

 		DZ.Event.subscribe('current_track', function(e){
 			$scope.playing_artist = e.track.artist.name;
 			$scope.playing_artist_link = '#/artist/'+e.track.artist.id;
 			$scope.playing_title = e.track.title;
 			$scope.playing_album_link = '#/album/'+e.track.album.id;
 			$scope.$apply();

 			DZ.api('/track/' + e.track.id, function(response){
 				console.log(LOGNS, response.album.cover);
 				$scope.playing_cover_src = response.album.cover;
 				$scope.$apply();
 			});
 		});
 		// console.log(DZ);
 		
		//----- fonction
		$scope.playTrack = function() {
			console.log('jkgjg');
			DZ.player.playTracks([2654285,2654285]);
			$scope.playing = true;
		};

		$scope.control = function() {
			//console.log('jkgjg');
			$scope.playing ? (DZ.player.pause(), $scope.playing = false) : (DZ.player.play(),  $scope.playing = true);
			//$scope.playing = true;
		};




	}]);

}());
