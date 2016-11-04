// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('AppCtrl', function($scope) {
  $scope.recognizedText = "";

  $scope.record = function() {
      //var recognition = new webkitSpeechRecognition(); //To Computer
      var recognition = new SpeechRecognition(); // To Device
      recognition.lang = 'es-ES';

      recognition.onresult = function(event) {
          if (event.results.length > 0) {
              $scope.recognizedText = event.results[0][0].transcript;
              $scope.$apply();
          }
      };

      recognition.start();
  };
});


/*$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

var recognition;
function onDeviceReady() {

	$('#speak').click( function() {
		recognition = new SpeechRecognition();
		recognition.onresult = function(event) {
			if (event.results.length > 0) {
				console.log(event.results[0][0].transcript);
				q.value = event.results[0][0].transcript;
			}
		};
		recognition.start();
	});
}*/
