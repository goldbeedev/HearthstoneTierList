'use strict';
//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  unirest = require('unirest'),
  decode = require('deckstrings').decode;

//loop through decklists to decode and push to an array?

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 5000;

app.use('/', express.static('public'));

// app.get('/my-data-endpoint', (req, res) => {
//   unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
//     .header("X-Mashape-Key", "0mmzJID0EImshKziZ9xGioPEVT3Sp1ueyDmjsn0PakOxETKmIn")
//     .end((result) => {
//       console.log(result.status, result.headers, result.body);
//       res.send(result);
//     });
// });

app.get('/my-data-endpoint', (req, res) => {
  unirest.get("https://api.hearthstonejson.com/v1/23966/enUS/cards.collectible.json")
    .end((result) => {
      console.log(result.status, result.headers, result.body);
      res.send(result);
    });
});

https://api.hearthstonejson.com/v1/23966/enUS/cards.collectible.json

app.get('/decks', function(req, res) {
    var dstrings = ["AAECAf0GBJ3iAtvpApfTAuCsAg340ALy0ALexALnywKKAbYHiNICi+EC9wSTBPzlAujnAuEHAA==", "AAECAf0EBpvTAqPrAsUE0ALCwwLKwQIM7AeWxwLJA9fhAs7yAk238QLKwwLV 4QKKAevCAqsEAA=="];
    var decoded = [];
    for (var i = 0; i<dstrings.length; i++){
      decoded.push(decode(dstrings[i]));
    }
    res.send(decoded);
});

// vendor scripts
app.get('/vendor/angular.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular', 'angular.js'));
});
app.get('/vendor/angular-route.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-route', 'angular-route.js'));
});
app.get('/vendor/angular-animate.js', function(req,res){
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-animate', 'angular-animate.js'));
});
app.get('/vendor/smoothscroll.js', function(req,res){
  res.sendFile(path.join(__dirname, '../node_modules', 'smoothscroll', 'smoothscroll.js'));
});


app.listen(port);
console.log('Magic happens on port ' + port);
