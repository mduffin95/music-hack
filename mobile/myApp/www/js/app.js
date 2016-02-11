// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);




    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('Ctrl', function($scope,$cordovaDeviceMotion){
  document.addEventListener("deviceready", function () {

      $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
        var X = result.x;
        var Y = result.y;
        var Z = result.z;
        var timeStamp = result.timestamp;
      }, function(err) {
        // An error occurred. Show a message to the user
      });

    }, false);



var conductor = new BandJS();
conductor.setTimeSignature(2,4);
conductor.setTempo(120);
var inst = conductor.createInstrument();
inst.note('quarter', 'C4');
inst.note('quarter', 'C4');
inst.note('quarter', 'C4');
inst.note('quarter', 'C4');
var player = conductor.finish();
player.play();
player.loop(true);
});
