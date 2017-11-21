(function(){
'use strict'


//initialize the angular module
angular.module('app')
.controller('mainController', ['$scope', '$location', '$http', '$log', function($scope, $location, $http, $log){

//set location to equal $location for data binding on the template
$scope.$location = $location;

//append function to append class that hides the nav links for responsive design.
function navAppend() {
	var navlinks = angular.element(document.querySelector('.navlinks'));
	navlinks.addClass('js');

} //end function navAppend

$scope.anotherAPICall = function(){

unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
.header("X-Mashape-Key", "0mmzJID0EImshKziZ9xGioPEVT3Sp1ueyDmjsn0PakOxETKmIn")
.end(function (result) {
  console.log(result.status, result.headers, result.body);

});
} //end anotherAPICall



//***********************************************************
//***********************************************************
//*********** NOTES *****************************************
//add errors for incorrect date ranges on the rover photo viewer!
//maybe add an image counter for the gallery that shows up?
//Prevent image window from refreshing and date range selected on rover photos when navigating different sections.
//Fix smoothscroll stuff
//Make gallery arrows hidden until rover is selected (maybe add fade effects?).
//style the fuckin site!



navAppend(); //calling navAppend for media query mobile optimization.

//smoothscroll

//can I build an object with key value pairs instead of these 3 variables?


//const array of objects for page navigation smoothscroll
const pages = [
	{ button: "about", page: "page1"},
	{ button: "meta", page: "page2"},
	{ button: "foresight", page: "page3"}
];

//for loop for each object in the pages array to add click listeners.
for (const { button, page } of pages) {
	document.getElementById(button).addEventListener('click', function(event){
		event.preventDefault();
		smoothScroll(document.getElementById(page));
	});
}

//templates for the meta page.
 $scope.metatemplates =
    [{ name: 'metamain', url: 'templates/metamain.html'},
     { name: 'tier1', url: 'templates/tier1.html'},
     { name: 'tier2', url: 'templates/tier2.html'},
     { name: 'tier3', url: 'templates/tier3.html'},
     { name: 'tier4', url: 'templates/tier4.html'}];

//templates for tier deck window
 $scope.tierdecks =
 	[{ name: 'tier1deck1', url: 'templates/tier1deck1.html'},
     { name: 'tier1deck2', url: 'templates/tier1deck2.html'},
     { name: 'tier1deck3', url: 'templates/tier1deck3.html'},
     { name: 'tier1deck4', url: 'templates/tier1deck4.html'}];

//templates for foresight page
 $scope.foresighttemplates = 
 	[{ name: 'foresightmain', url: 'templates/metaforesight.html'},
 	 { name: 'ftier1', url: 'templates/ftier1.html'},
 	 { name: 'ftier2', url: 'templates/ftier2.html'},
 	 { name: 'ftier3', url: 'templates/ftier3.html'},
 	 { name: 'ftier4', url: 'templates/ftier4.html'}]
 
 //set initial meta and foresight view.
 $scope.metatemplate = $scope.metatemplates[0];
 $scope.foresighttemplate = $scope.foresighttemplates[0];

 //tier 1 function to change the template
//come up with more efficient solution for this

//"meta" page template path, starts out at meta main, and changes based on scope.nav function
$scope.metaPath = $scope.metatemplate.url;
//"metaforesight" page template path, starts out at foresightmain, and changes based on scope.nav2 function
$scope.forePath	= $scope.foresighttemplate.url;
//"tierdecks" template, initial path

//function to change the meta page
$scope.nav = function(path) {
	$scope.metaPath = path;
}

//function to change the foresight page
$scope.nav2 = function(path) {
	$scope.forePath = path;
}

}]);	//end controller
})(); //end self invoked function