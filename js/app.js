// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var smokebuster=angular.module('smokebuster', ['ionic','ionic.utils'])

.run(function($ionicPlatform,$localstorage,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(!$localstorage.get('first'))
    {
     $state.go('settings');
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
  })

  .state('app.stats', {
    url: "/stats",
    views: {
      'menuContent': {
        templateUrl: "templates/track.html"
      }
    }
  })

  .state('app.report', {
    url: "/report",
    views: {
      'menuContent': {
        templateUrl: "templates/report.html"
      }
    }
  })
    .state('app.milestones', {
      url: "/milestones",
      views: {
        'menuContent': {
          templateUrl: "templates/achievements.html",
        }
      }
    })
    .state('settings', {
      url: "/settings",
      templateUrl: "templates/settings.html",
    })

  .state('app.benefits', {
    url: "/benefits",
    views: {
      'menuContent': {
        templateUrl: "templates/benefits.html",
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/stats');
});
