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

var about = document.querySelector('#about');
var meta = document.querySelector('#meta');
var foresight = document.querySelector('#foresight');

// var exampleDestination = document.querySelector('#page1');

// var handleClick = function(event) {
// 	event.preventDefault();

// 	smoothScroll(exampleDestination);
// }; //end handleClick

about.addEventListener('click', function(event){
	event.preventDefault();
	smoothScroll(document.querySelector('#page1'));
});

meta.addEventListener('click', function(event){
	event.preventDefault();
	smoothScroll(document.querySelector('#page2'));
});

foresight.addEventListener('click', function(event){
	event.preventDefault();
	smoothScroll(document.querySelector('#page3'));
});


}]);	//end controller
})(); //end self invoked function