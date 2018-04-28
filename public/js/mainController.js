(function(){
'use strict'



//initialize the angular module
angular.module('app')
.controller('mainController', ['$scope', '$location', '$http', '$log', function($scope, $location, $http, $log){

//set location to equal $location for data binding on the template
$scope.$location = $location;

//setup deck variables
var testDecks;
var allCards;
var matching = [];
$scope.decksObject = [];
var currentDeck;
var deckCodes;
var codeNeeded 
//store the html structure for the cards lists.
var deckhtml;

//append function to append class that hides the nav links for responsive design.
function navAppend() {
	var navLinks = angular.element(document.querySelector('.navlinks'));
	navLinks.addClass('js');

} //end function navAppend

//get all of the cards from the hearthstone API or maybe just get cards by DBFID from the decks endpoint?

//once the correct logic is used, push each deck of cards into an array for listing purposes (loop through and dynamically generate the deck lists) 

//get the decks endpoint, this will get the converted deck codes and set the response.data to the testdecks variable.
$http.get('/decks')
     .then((response) => {
    testDecks = response.data.decks;
    deckCodes = response.data.codes;
    console.log(testDecks);
    console.log(testDecks[0].cards.length);
  //get the cards index with the most index values 
  });

//get the my-data-endpoint, this gets all the cards from the 
$http.get('/my-data-endpoint') 
     .then((response) => {
     console.log("This is the decks response " + response.data.body);
     //store all the cards in a variable

     //variable for each decks length in the function so we can push results to an object once each has been iterated through.
     // var arrlen = testdecks[i].cards.length;

     allCards = response.data.body;
     console.log(allCards[0].dbfId);
     
     for (var i = 0; i < testDecks.length; i++) {
       for (var y = 0; y < testDecks[i].cards.length; y++) {       //loop through the cards inside the test decks array - need to come up with a way to push the cards after each deck!
            console.log(testDecks[i].cards.length);
        for (var x = 0; x < allCards.length; x++) {  //looop through all the cards in our api and check if their dbfId matches the decoded ones in test decks!
            
            if (testDecks[i].cards[y][0] === allCards[x].dbfId) {
                matching.push({name: allCards[x].name, cost: allCards[x].cost, quantity: testDecks[i].cards[y][1]}); //maybe push an array of objects with properties?
                //loop through each deck, and push the deck once you have looped through!
                //how do we check after each card if it has seen all of the indexes in that array?
            } //end if testdecks
            var arrlen = testDecks[i].cards.length;

            
            //when we finish looping through an array of cards, push them to an object labeled as such
            //if the length of the array is equal to the cards index value + 1 (so the first deck would be 17) do something.
            //end if arrlen
        } //end for loop
        if (arrlen === y + 1) {
                $scope.decksObject.push(matching);
                matching = [];
            } 
       } //end for loop
    } //end for loop
console.log(matching);
console.log($scope.decksObject);
console.log($scope.decksObject.length);
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
 $scope.metaTemplates =
    [{ name: 'metamain', url: 'templates/metamain.html'},
     { name: 'tier1', url: 'templates/tier/tier1.html'},
     { name: 'tier2', url: 'templates/tier/tier2.html'},
     { name: 'tier3', url: 'templates/tier/tier3.html'},
     { name: 'tier4', url: 'templates/tier/tier4.html'}];

//eventually write a function that loops through all decks in the deck codes, assigns a name and url dynamically, so it builds it automatically.
//templates for tier deck window
 $scope.tierDecks =
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
 $scope.foresightTemplates = 
 	[{ name: 'foresightmain', url: 'templates/metaforesight.html'},
 	 { name: 'ftier1', url: 'templates/ftier/ftier1.html'},
 	 { name: 'ftier2', url: 'templates/ftier/ftier2.html'},
 	 { name: 'ftier3', url: 'templates/ftier/ftier3.html'},
 	 { name: 'ftier4', url: 'templates/ftier/ftier4.html'}]
 
 //set initial meta and foresight view.
 $scope.metaTemplate = $scope.metaTemplates[0];
 $scope.foresighttemplate = $scope.foresightTemplates[0];

 //tier 1 function to change the template
//come up with more efficient solution for this

//"meta" page template path, starts out at meta main, and changes based on scope.nav function
$scope.metaPath = $scope.metaTemplate.url;
//"metaforesight" page template path, starts out at foresightmain, and changes based on scope.nav2 function
$scope.forePath	= $scope.foresighttemplate.url;
//"tierdecks" template, initial path

//function to build decks into html from the decoded decks arrays.


function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i ++) {
        if(array[i][attr] === value) {
            codeNeeded = deckCodes[i];
            console.log(codeNeeded);
            return codeNeeded;
        }
    }
    return -1;
}

//function to change the meta page
$scope.nav = function(path) {
	$scope.metaPath = path;
    console.log("this is the path: " + path);

}




//function to change the foresight page
$scope.nav2 = function(path) {
	$scope.forePath = path;
}

// store the current clicked deck 
$scope.deckCodeCopy = function(path) {
findWithAttr($scope.tierDecks, 'url', $scope.metaPath);
}






}]);	//end controller
})(); //end self invoked function