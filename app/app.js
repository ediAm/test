// create the module and name it diffSign
var diffSign = angular.module('diffSign', ['ngRoute', 'ui.bootstrap','media']);


// configure our routes
diffSign.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'app/home/home.html',
            controller  : 'homeController'
        })
        .when('/home', {
            templateUrl : 'app/home/home.html',
            controller  : 'homeController'
        })

        // route for the about page

        .when('/login', {
            templateUrl : 'app/login/login.html',
            controller  : 'loginController'
        })


        .when('/signUp', {
            templateUrl : 'app/signUp/signUp.html',
            controller  : 'signUpController'
        })


        // route for the contact page
        .when('/learningMode', {
            templateUrl : 'app/learningMode/learningMode.html',
            controller  : 'learningModeController'
        })

        .when('/contactUs', {
            templateUrl : 'app/contactUs/contactUs.html',
            controller  : 'contactUsController'

        })
        
        .when('/Learning_House', {
            templateUrl : 'app/learningMode/house/Learning_House.html',
            controller  : 'Learning_HouseController'

        })

    
        .when('/Learning_Letters', {
            templateUrl : 'app/learningMode/Letters/Learning_Letters.html',
            controller  : 'Learning_LettersController'

        })
        
       

        .when('/games', {
            templateUrl : 'app/games/trivia/triviaGame.html',
            controller  : 'gamesController'

        });

});
