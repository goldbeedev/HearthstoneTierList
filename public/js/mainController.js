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
	$scope.roverphotos = [];
	startingIndex = 0;
	// $scope.yyyy;
	// $scope.mm;
	// $scope.dd;
	// question mark marks beginning of query string, & sign separates indidvual variables within the string
	$http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + $scope.yyyy + "-" + $scope.mm + "-" + $scope.dd + "&camera=" + $scope.curCam + "&api_key=e9i490OQTmaJm70cRYYo5LiyhG9UWQ9j0Uxl8xoQ")
	.then(function(response){

		console.log(response);
		$scope.roverdata = response.data
		console.log("this is the mars rover data: " + $scope.roverdata);
		

		console.log("This is the length of the rover photos: " + $scope.roverdata.photos.length);

		//for loopo to push images returned 
		for (var i = 0; i < $scope.roverdata.photos.length; i++) {
			//this isnt working below ---- figure out how to just push the img_src!
			$scope.roverphotos.push($scope.roverdata.photos[i].img_src);
		}
		console.log("These are the pushed rover photos: " + $scope.roverphotos);
		console.log("This is the rover photos length: " + $scope.roverphotos.length);

		//just testing the image with the first item in the array, maybe use a loop to push all images returned into their own array and display a gallery-
		$scope.imagewindow = $scope.roverphotos[startingIndex];
		//jquery makes our lives easy showing the gallery scroll arrows.
		if ($scope.roverphotos.length > 1) {
			$(".arrow").show();
	}
		// angular.element(document).find("i").removeClass("hidden");
	}); //end $http.get function(response)
	console.log("test func working"); 
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
 $scope.metatemplate = $scope.metatemplates[0];


 $scope.foresighttemplates = 
 	[{ name: 'foresightmain', url: 'templates/metaforesight.html'},
 	 { name: 'ftier1', url: 'templates/ftier1.html'},
 	 { name: 'ftier2', url: 'templates/ftier2.html'},
 	 { name: 'ftier3', url: 'templates/ftier3.html'},
 	 { name: 'ftier4', url: 'templates/ftier4.html'}]
 $scope.foresighttemplate = $scope.foresighttemplates[0];

 //tier 1 function to change the template
//come up with more efficient solution for this

 $scope.tier1 = function() {
 	$scope.metatemplate = $scope.metatemplates[1];
 }

 $scope.tier2 = function() {
 	$scope.metatemplate = $scope.metatemplates[2];
 }

 $scope.tier3 = function() {
 	$scope.metatemplate = $scope.metatemplates[3];
 }

 $scope.tier4 = function() {
 	$scope.metatemplate = $scope.metatemplates[4];
 }




}]);	//end controller
})(); //end self invoked function