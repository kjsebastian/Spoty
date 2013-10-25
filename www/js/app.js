'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var spoty = angular.module('spoty', ['spoty.filters', 'spoty.services', 'spoty.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/favView.html', controller: 'AppCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/currentView.html', controller: 'AppCtrl'});
        $routeProvider.when('/view2', {templateUrl: 'partials/searchView.html', controller: 'AppCtrl'});
        $routeProvider.when('/view3', {templateUrl: 'partials/faqView.html', controller: 'AppCtrl'});
        $routeProvider.when('/view4', {templateUrl: 'partials/searchResultView.html', controller: 'AppCtrl'});
        $routeProvider.when('/view5', {templateUrl: 'partials/spotDetialView.html', controller: 'AppCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);

spoty.filter('searchFor', function(){

    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.question.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });

        if (result.length == 0) {
            var i = {question: "item not found!",
            answer: "please use different search terms."};
            result.push(i);
        }
        return result;
    };

});