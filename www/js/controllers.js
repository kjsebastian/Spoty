'use strict';

/* Controllers */
function AppCtrl($scope,navSvc,$rootScope) {
    $rootScope.showSettings = false;
    $scope.slidePage = function (path,type) {
        navSvc.slidePage(path,type);
    };
    $scope.back = function () {
        navSvc.back();
    };
    $scope.changeSettings = function () {
        $rootScope.showSettings = true;
    };
    $scope.closeOverlay = function () {
        $rootScope.showSettings = false;
    };
    $scope.alertNotify = function() {
        navigator.notification.alert("Location Service",function() {return false;},"Your location service is not turned on!",["Settings", "Close"]);
    };
    $scope.confirmNotify = function() {
        navigator.notification.confirm("My Confirmation",function(){console.log("Confirm Success")},"Are you sure?",["Ok","Cancel"]);
    };
    $scope.items = [
        {
            question:'Question: What does the app do?',
            answer:'Answer: The app help the user to find available spot in SMU',
        },
        {
            question:'Question: How do I search for a spot?',
            answer:'Answer: You can search for spots around you in the "Search Aorund Me Tab". Or you could choose to search for specific places in the "Specify Location" tab'
        },
        {

            question:'Question: How to add a favorite spot?',
            answer:'Answer: Once you have found a spot using the app, tap on the spot in the map and click "Add to Favorites". You can give it a name of your own.',

        },
        {

            question:'Question: How do i remove the favorite spot?',
            answer:'Answer: Long tap a favorite spot from the list and choose remove.',

        }
    ];
}