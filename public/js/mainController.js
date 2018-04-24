(function(){
'use strict'



//initialize the angular module
angular.module('app')
.controller('mainController', ['$scope', '$location', '$http', '$log', function($scope, $location, $http, $log){

//set location to equal $location for data binding on the template
$scope.$location = $location;

//setup deck variables
var testdecks;
var allcards;
var matching = [];
$scope.decksobject = [];
var currentDeck;
//store the html structure for the cards lists.
var deckhtml;

//append function to append class that hides the nav links for responsive design.
function navAppend() {
	var navlinks = angular.element(document.querySelector('.navlinks'));
	navlinks.addClass('js');

} //end function navAppend

//get all of the cards from the hearthstone API or maybe just get cards by DBFID from the decks endpoint?

//once the correct logic is used, push each deck of cards into an array for listing purposes (loop through and dynamically generate the deck lists) 

//get the decks endpoint, this will get the converted deck codes and set the response.data to the testdecks variable.
$http.get('/decks')
     .then((response) => {
    testdecks = response.data;
    console.log(testdecks);
    console.log(testdecks[0].cards.length);
  //get the cards index with the most index values 
  });

//get the my-data-endpoint, this gets all the cards from the 
$http.get('/my-data-endpoint') 
     .then((response) => {
     console.log(response.data.body);
     //store all the cards in a variable

     //variable for each decks length in the function so we can push results to an object once each has been iterated through.
     // var arrlen = testdecks[i].cards.length;

     allcards = response.data.body;
     console.log(allcards[0].dbfId);
     
     for (var i = 0; i < testdecks.length; i++) {
       for (var y = 0; y < testdecks[i].cards.length; y++) {       //loop through the cards inside the test decks array - need to come up with a way to push the cards after each deck!
            console.log(testdecks[i].cards.length);
        for (var x = 0; x < allcards.length; x++) {  //looop through all the cards in our api and check if their dbfId matches the decoded ones in test decks!
            
            if (testdecks[i].cards[y][0] === allcards[x].dbfId) {
                matching.push({name: allcards[x].name, cost: allcards[x].cost, quantity: testdecks[i].cards[y][1]}); //maybe push an array of objects with properties?
                //loop through each deck, and push the deck once you have looped through!
                //how do we check after each card if it has seen all of the indexes in that array?
            } //end if testdecks
            var arrlen = testdecks[i].cards.length;

            
            //when we finish looping through an array of cards, push them to an object labeled as such
            //if the length of the array is equal to the cards index value + 1 (so the first deck would be 17) do something.
            //end if arrlen
        } //end for loop
        if (arrlen === y + 1) {
                $scope.decksobject.push(matching);
                matching = [];
            } 
       } //end for loop
    } //end for loop
console.log(matching);
console.log($scope.decksobject);
console.log($scope.decksobject.length);
  }); //end then response function

//***********************************************************
//***********************************************************
//*********** NOTES *****************************************
//add errors for incorrect date ranges on the rover photo viewer!
//maybe add an image counter for the gallery that shows up?
//Prevent image window from refreshing and date range selected on rover photos when navigating different sections.
//Fix smoothscroll stuff
//Make gallery arrows hidden until rover is selected (maybe add fade effects?).
//style the fuckin site!
//write function that displays card data, make the api call 1 time, and show the card in the same spot with mouseover, 
//the way we select the card is by using a bidirectional angular hook with some part of the data returned and the card name.


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
     { name: 'tier1', url: 'templates/tier/tier1.html'},
     { name: 'tier2', url: 'templates/tier/tier2.html'},
     { name: 'tier3', url: 'templates/tier/tier3.html'},
     { name: 'tier4', url: 'templates/tier/tier4.html'}];

//templates for tier deck window
 $scope.tierdecks =
 	[{ name: 'tier1deck1', url: 'templates/tier/decks/tier1deck1.html'},
     { name: 'tier1deck2', url: 'templates/tier/decks/tier1deck2.html'},
     { name: 'tier1deck3', url: 'templates/tier/decks/tier1deck3.html'},
     { name: 'tier1deck4', url: 'templates/tier/decks/tier1deck4.html'},
     { name: 'tier2deck1', url: 'templates/tier/decks/tier2deck1.html'},
     { name: 'tier2deck2', url: 'templates/tier/decks/tier2deck2.html'},
     { name: 'tier2deck3', url: 'templates/tier/decks/tier2deck3.html'},
     { name: 'tier2deck4', url: 'templates/tier/decks/tier2deck4.html'},
     { name: 'tier3deck1', url: 'templates/tier/decks/tier3deck1.html'},
     { name: 'tier3deck2', url: 'templates/tier/decks/tier3deck2.html'},
     { name: 'tier3deck3', url: 'templates/tier/decks/tier3deck3.html'},
     { name: 'tier3deck4', url: 'templates/tier/decks/tier3deck4.html'},
     { name: 'tier4deck1', url: 'templates/tier/decks/tier4deck1.html'},
     { name: 'tier4deck2', url: 'templates/tier/decks/tier4deck2.html'},
     { name: 'tier4deck3', url: 'templates/tier/decks/tier4deck3.html'},
     { name: 'tier4deck4', url: 'templates/tier/decks/tier4deck4.html'}];

//templates for foresight page
 $scope.foresighttemplates = 
 	[{ name: 'foresightmain', url: 'templates/metaforesight.html'},
 	 { name: 'ftier1', url: 'templates/ftier/ftier1.html'},
 	 { name: 'ftier2', url: 'templates/ftier/ftier2.html'},
 	 { name: 'ftier3', url: 'templates/ftier/ftier3.html'},
 	 { name: 'ftier4', url: 'templates/ftier/ftier4.html'}]
 
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

//function to build decks into html from the decoded decks arrays.


//function to change the meta page
$scope.nav = function(path) {
	$scope.metaPath = path;
}

//function to change the foresight page
$scope.nav2 = function(path) {
	$scope.forePath = path;
}

// store the current clicked deck 






}]);	//end controller
})(); //end self invoked function