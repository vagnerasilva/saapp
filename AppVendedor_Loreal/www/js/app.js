// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [ 'ionic', 
                            'starter.controllers', 
                            'ionic-material', 
                            'ionMdInput',
                            'firebase',
                            'ngMaterial',
                            'ngMessages',
                            'material.svgAssetsCache'

                          ])

.run(function(  $ionicPlatform
                
              ) {

    // Configuracao Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCPiu530AKjCM8hBuBIV_8Kj5i1yC7U4wU",
    authDomain: "appvendedorloreal.firebaseapp.com",
    databaseURL: "https://appvendedorloreal.firebaseio.com",
    projectId: "appvendedorloreal",
    storageBucket: "appvendedorloreal.appspot.com",
    messagingSenderId: "668692703647"
    
});


 
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
    });
})

.config(function(     $stateProvider, 
                      $urlRouterProvider, 
                      $ionicConfigProvider
                ) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            }
       //     'fabContent': {
       //         template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
       //         controller: function ($timeout) {
       //             $timeout(function () {
       //                 document.getElementById('fab-activity').classList.toggle('on');
       //             }, 200);
       //         }
       //     }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            }
        //    'fabContent': {
         //      // template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
         //       controller: function ($timeout) {
          //          $timeout(function () {
         //               document.getElementById('fab-friends').classList.toggle('on');
        //            }, 900);
        //        }
         //   }
        }
    })
    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            }
          //  'fabContent': {
           //    // template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
          //      controller: function ($timeout) {
           //         $timeout(function () {
           //             document.getElementById('fab-gallery').classList.toggle('on');
           //         }, 600);
           //     }
          //  }
        }
    })


    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/00_login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/01_home.html',
                controller: 'ProfileCtrl'
            }
         //   'fabContent': {
          //      template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
           //     controller: function ($timeout) {
           //         /*$timeout(function () {
           //             document.getElementById('fab-profile').classList.toggle('on');
           //         }, 800);*/
            //    }
           // }
        }
    })

   .state('app.formStart1', {
        url: '/formStart1',
        views: {
            'menuContent': {
                templateUrl: 'templates/02_form_start1.html',
                controller: 'StartFormCtrl'
            }
        }
    })

    .state('app.skintype', {
        url: '/skintype',
        views: {
            'menuContent': {
                templateUrl: 'templates/03_type_skin.html',
                controller: 'ResultCtrl'
            }
        }
    })
    .state('app.skincolor', {
        url: '/skincolor',
        views: {
            'menuContent': {
                templateUrl: 'templates/04_type_skincolor.html',
                controller: 'ResultCtrl'
            }
        }
    })
    .state('app.skinshape', {
        url: '/skinshape',
        views: {
            'menuContent': {
                templateUrl: 'templates/05_type_skinshape.html',
                controller: 'ResultCtrl'
            }
        }
    })
    .state('app.eyestype', {
        url: '/eyestype',
        views: {
            'menuContent': {
                templateUrl: 'templates/06_type_eyes.html',
                controller: 'ResultCtrl'
            }
        }
    })
    .state('app.lipstype', {
        url: '/lipstype',
        views: {
            'menuContent': {
                templateUrl: 'templates/07_type_lips.html',
                controller: 'ResultCtrl'
            }
        }
    })

    .state('app.result', {
        url: '/result',
        views: {
            'menuContent': {
                templateUrl: 'templates/08_result.html',
                controller: 'ResultCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
